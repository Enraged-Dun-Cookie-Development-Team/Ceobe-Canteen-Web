import { ceobe_links } from "./data";
import { CeobeLinkResponse } from "./types";

const USE_LOCAL = true;

export async function fetchCeobeLinkData() {
  if (USE_LOCAL) {
    console.log("Using fake data");
    const demo: CeobeLinkResponse = {
      code: 0,
      msg: "ok",
      data: ceobe_links,
    };
    console.log(demo);
    return demo;
  }
  const resp: CeobeLinkResponse = await (
    await fetch("https://cdn.ceobecanteen.top/link/data")
  ) //不存在的API
    .json();
  return resp;
}
