<template>
    <canvas class="spine" ref="canvasSpine" :style="{zIndex: props.index}"></canvas>
    <div 
      class="spine-position" 
      ref="spinePosition" 
      :style="{
        height: state.bonesPositionYMax+'px',
        width: state.bonesPositionXMax+'px',
        left: state.left+'px',
        top: state.top+'px',
        
      }"
      @click="clickSpine"
    ></div>
</template>

<script lang="ts" setup>
import { onMounted, defineProps, onBeforeUnmount, ref, reactive } from "vue";
import spine from '@/components/spine/spine-webgl.js'

export interface Spine {
  index: number
  skelPath: string
  atlasPath: string
  animAction: string
} 


const props = defineProps({
  skelPath: {
    type: String,
    required: true,
  },
  atlasPath: {
    type: String,
    required: true,
  },
  animAction: {
    type: String,
    required: false,
    default: 'Default'
  },
  index: {
    type: Number,
    required: false,
    default: 1
  }
});

const state = reactive({
  spineHeight: 0,
  spineWidth: 0,
  left: 0,
  top: 0,
  bonesPositionXMax: 0,
  bonesPositionYMax: 0,
  spineBones: [] as SpinePosition[]
})

const spinePosition = ref<HTMLElement>();
const canvasSpine = ref<HTMLCanvasElement>();

interface AnimationRun {
  // 动画单次执行的时间
  duration : number
  // 动画执行次数
  count ?: number
  // x坐标缩放（转向）
  isMove: boolean
  scaleX : number
  // y坐标缩放（转向）
  scaleY ?: number
  // 执行的动画
  animation ?: any
}

interface SpinePosition {
  left : number
  top : number
  bonesPositionXMax: number
  bonesPositionYMax: number
}

interface Task {
  delay : number
  timeout : any
}

let canvas : HTMLCanvasElement;
let gl : any;
let shader : any;
let batcher : any
let mvp = new spine.webgl.Matrix4()
let assetManager : any
let skeletonRenderer : any
let lastFrameTime : any;
let startFrameTime : any
let spineboy : any;
let animationFrameId: number;
let ar:AnimationRun
let animation: any
let tasks = [] as Task[]
let duration: number
let animationsNames = [] as any[]
let ququeIndex = 1
let scale = 1
let runTasksTime:any


// const testSpineDatas = [
//   {
//     skelPath: 'spine/42/build_char_350_surtr_summer_9.skel',
//     atlasPath: 'spine/42/build_char_350_surtr_summer_9.atlas',
//     animAction: 'Move'
//   },
//   {
//     skelPath: 'spine/mlyss/build_char_249_mlyss.skel',
//     atlasPath: 'spine/mlyss/build_char_249_mlyss.atlas',
//     animAction: 'Move'
//   },
  
// ]



onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrameId)
  clearTimeout(runTasksTime)
})

const init = () => {
  // Setup canvas and WebGL context. We pass alpha: false to canvas.getContext() so we don't use premultiplied alpha when
  // loading textures. That is handled separately by PolygonBatcher.
  canvas = canvasSpine.value as HTMLCanvasElement
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const config = { 
    alpha: true,
    viewport: {
      transitionTime: 1 // Transition between viewports for 1 second
    },
    powerPreference: "high-performance",
    preserveDrawingBuffer: true,
    antialias: true
  }
  
  gl =
    canvas.getContext('webgl', config) ||
    canvas.getContext('experimental-webgl', config)
  if (!gl) {
    alert('WebGL is unavailable.')
    return
  }
  // Create a simple shader, mesh, model-view-projection matrix, SkeletonRenderer, and AssetManager.
  shader = spine.webgl.Shader.newTwoColoredTextured(gl)
  batcher = new spine.webgl.PolygonBatcher(gl)
  mvp.ortho2d(0, 0, canvas.width - 1, canvas.height - 1)
  skeletonRenderer = new spine.webgl.SkeletonRenderer(gl)
  assetManager = new spine.webgl.AssetManager(gl)

  // Tell AssetManager to load the resources for each skeleton, including the exported .skel file, the .atlas file and the .png
  // file for the atlas. We then wait until all resources are loaded in the load() method.
  assetManager.loadBinary(props.skelPath)
  assetManager.loadTextureAtlas(props.atlasPath)
  requestAnimationFrame(load)
}

const load = () => {
  // Wait until the AssetManager has loaded all resources, then load the skeletons.
  if (assetManager.isLoadingComplete()) {
      spineboy = loadSpineboy(props.animAction, true)
      animationsNames = spineboy.skeleton.data.animations.map((p:any) => p.name)
      console.log(spineboy)
      // 计算小人的位置和大小
      spineboy.skeleton.x = 0
      spineboy.skeleton.y = 0
      calcSpinePosition()
      setupAnimations(0)
      lastFrameTime = Date.now() / 1000
      requestAnimationFrame(render) // Loading is done, call render every frame.
    } else {
      requestAnimationFrame(load)
    }
}

const loadSpineboy = (initialAnimation:string, premultipliedAlpha:boolean) => {
  const atlas = assetManager.get(props.atlasPath)
  const atlasLoader = new spine.AtlasAttachmentLoader(atlas)
  const skeletonBinary = new spine.SkeletonBinary(atlasLoader)
  skeletonBinary.scale = 1
  const skeletonData = skeletonBinary.readSkeletonData(
    assetManager.get(props.skelPath)
  )
  const skeleton = new spine.Skeleton(skeletonData)
  const bounds = calculateSetupPoseBounds(skeleton)
  const animationStateData = new spine.AnimationStateData(skeleton.data)
  const animationState = new spine.AnimationState(animationStateData)
  
  // Pack everything up and return to caller.
  return {
    skeleton: skeleton,
    state: animationState,
    bounds: bounds,
    premultipliedAlpha: premultipliedAlpha,
  }
}

// 处理小人行动逻辑
const setupAnimations = (sign = 0) => {
  // 标识符sign,1:触摸反馈，2：到达左边边界，3：到达右边边界
  // 随机动作
  if (!animationsNames.length) return
  let actionIndex = Math.floor(Math.random() * animationsNames.length)
  let action = animationsNames[actionIndex]
  // let action = 'Move'
  console.log(action)
  if (sign !== 1 && (action === 'Default' || action === 'Interact')) {
    setupAnimations()
    return
  }
  
  // 随机时间倍率 1-4倍，特殊动作只要一倍
  let actionMult = Math.floor(Math.random() * 4) + 1
  let isMove = false
  let scaleXRandom = Math.floor(Math.random() * 2)
  if (action === 'Special') actionMult = 1
  if (action === 'Move') isMove = true
  switch (sign) {
    case 1:
      action = 'Interact'
      actionMult = 1
      isMove = false
      break;
    case 2:
      action = 'Move'
      isMove = true
      scaleXRandom = 1
      actionMult = 1
      break;
    case 3:
      action = 'Move'
      isMove = true
      scaleXRandom = 0
      actionMult = 1
      break;
    default:
      break;
  }
  // addAnimation(未知，动画名，是否循环，上一个动画持续的时间)
  if (ququeIndex===1) {
    animation = spineboy.state.setAnimation(0, action, true)
  }
  else {
    animation = spineboy.state.addAnimation(0, action, true, duration)
  }
  if (animation.animationEnd >= 8) {
    duration = animation.animationEnd/2*actionMult
  }
  else if (animation.animationEnd <= 2) {
    duration = animation.animationEnd*2*actionMult
  }
  else {
    duration = animation.animationEnd*actionMult
  }
  schedule(ququeIndex, duration,{
    animation: animation,
    duration: duration,
    isMove: isMove,
    scaleX: scaleXRandom?1:-1
  })
  ququeIndex++
  if (ququeIndex === 6) {
    ququeIndex =1
    runTasks()
    return
  }
  setupAnimations()
}

const calculateSetupPoseBounds = (skeleton: any) => {
  skeleton.setToSetupPose()
  skeleton.updateWorldTransform()
  const offset = new spine.Vector2()
  const size = new spine.Vector2()
  skeleton.getBounds(offset, size, [])
  return { offset: offset, size: size }
}

const render = () => {
  const now = Date.now() / 1000
  const delta = now - lastFrameTime
  lastFrameTime = now
  // Update the MVP matrix to adjust for canvas size changes
  resize()
  gl.clearColor(0,0,0,0)
  gl.clear(gl.COLOR_BUFFER_BIT)
  // Apply the animation state based on the delta time.
  const skeleton = spineboy.skeleton
  const state = spineboy.state
  const premultipliedAlpha = spineboy.premultipliedAlpha
  // 动画逻辑的刷新频率
  state.update(delta)
  state.apply(skeleton)
  skeleton.updateWorldTransform()
  // Bind the shader and set the texture and model-view-projection matrix.
  shader.bind()
  shader.setUniformi(spine.webgl.Shader.SAMPLER, 0)
  shader.setUniform4x4f(spine.webgl.Shader.MVP_MATRIX, mvp.values)
  // Start the batch and tell the SkeletonRenderer to render the active skeleton.
  batcher.begin(shader)
  skeletonRenderer.premultipliedAlpha = premultipliedAlpha
  skeletonRenderer.draw(batcher, skeleton)
  batcher.end()
  shader.unbind()

    
  requestAnimationFrame(render)
}


const move = () => {
  const now = Date.now() / 1000
  const delta = now - startFrameTime
  if (delta>ar.duration) {
    cancelAnimationFrame(animationFrameId)
    console.log('被注销的动画ID：' + animationFrameId)
    // 运行完之后再新建一个随机动画
    return
  }
  if (ar.isMove) {
    spineboy.skeleton.scaleX = ar.scaleX
    if (ar.scaleX>0) spineboy.skeleton.x++
    else spineboy.skeleton.x--
  }
  calcSpinePosition()
  animationFrameId = requestAnimationFrame(move)
}

const resize = () => {
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  if (canvas.width != w || canvas.height != h) {
    canvas.width = w
    canvas.height = h
  }
  
  // Calculations to center the skeleton in the canvas.
  const bounds = spineboy.bounds
  const centerX = bounds.offset.x + bounds.size.x / 2
  const centerY = bounds.offset.y + bounds.size.y / 2
  const scaleX = bounds.size.x / canvas.width
  const scaleY = bounds.size.y / canvas.height
  scale = Math.max(scaleX, scaleY) * 3
  if (scale < 1) scale = 1
  const width = canvas.width * scale
  const height = canvas.height * scale
  calcSpinePosition()
  mvp.ortho2d(centerX - width / 2, centerY - height / 2, width, height)

  gl.viewport(0, 0, canvas.width, canvas.height)
}

// task:队列下标，time:延迟时间
const schedule = (ququeIndex:number, time: number, amintionRun:AnimationRun) => {
  tasks.push({
    delay: time,
    timeout: () => {
      console.log(`${time} - Task ${ququeIndex} executed`)
      ar = amintionRun
      animationFrameId = requestAnimationFrame(move)
    }
  })
}
const runTasks = () => {
    if (!tasks.length) {
        console.log('All tasks completed')
        setupAnimations()
        return 
    }
    startFrameTime = Date.now() / 1000
    const task = tasks.shift()
    task?.timeout()
    runTasksTime = setTimeout(runTasks, task!.delay*1000)
}

// 计算小人位置
const calcSpinePosition = () => {
  const spineMoveX = spineboy.skeleton.x/scale
  const spineMoveY = spineboy.skeleton.y/scale
  const bonesPositionX = spineboy.skeleton.bones.map((p:any) => p.x)
  const bonesPositionY = spineboy.skeleton.bones.map((p:any) => p.y)
  state.bonesPositionXMax =Math.max(...bonesPositionX)/scale
  state.bonesPositionYMax = (Math.max(...bonesPositionY) + Math.abs(Math.min(...bonesPositionY)))/scale
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  state.top = h/2 - state.bonesPositionYMax/2 + spineMoveY
  state.left = w/2 - state.bonesPositionXMax/2 + spineMoveX
  
  // 需要做边界判定，超过边界后阻止移动
  if (state.left <= 0) {
    tasks = [] as Task[]
    cancelAnimationFrame(animationFrameId)
    clearTimeout(runTasksTime)
    ququeIndex = 1
    setupAnimations(2)
  }
  else if (state.left >= canvas.clientWidth - state.bonesPositionXMax) {
    tasks = [] as Task[]
    cancelAnimationFrame(animationFrameId)
    clearTimeout(runTasksTime)
    ququeIndex = 1
    setupAnimations(3)
  }
}

// 触摸反馈
const clickSpine = () => {
  tasks = [] as Task[]
  cancelAnimationFrame(animationFrameId)
  clearTimeout(runTasksTime)
  ququeIndex = 1
  setupAnimations(1)
}



</script>

<style lang="scss" scoped>
.spine {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #00000000;
}
.spine-position {
  position: absolute;
  border: 1px solid red;
  cursor: pointer;
}
</style>