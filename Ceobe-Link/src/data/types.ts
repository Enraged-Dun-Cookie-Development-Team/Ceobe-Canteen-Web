import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface CeobeLink {
  name: string;
  desc: string;
  url: string;
  cover: string | CeobeFontIcon | null;
}

export interface CeobeLinkResponse {
  code: number;
  msg: string;
  data: CeobeLink[] | null;
}

export interface CeobeFontIcon {
  icon: IconDefinition;
  color?: string;
}
