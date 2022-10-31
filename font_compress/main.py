from fontTools.ttLib import TTFont
import fontTools
from fontTools.subset import main as ss
import sys
import glob 



target_format = ['ts', 'html', 'js', 'vue']
target_files = []

for f in target_format:
    target_files.extend(glob.glob('./src/**/*.{}'.format(f), recursive=True))

# print(target_files)
    
text_list = ''


for fp in target_files:
    # print(fp)

    for suffix in target_format:
        if fp.endswith(suffix): # 去掉font文件夹本身
            with open(fp, 'r', encoding='utf-8') as f:
                text_list += f.read()

text_string = str(set(text_list))


for font_name in glob.glob('./src/assets/font-bak/*'):
    font_name = font_name.split('/')[-1]
    sys.argv = [None, './src/assets/font-bak/{}'.format(font_name), '--text={}'.format(text_string), '--output-file=./src/assets/font/{}'.format(font_name)]
    ss()
