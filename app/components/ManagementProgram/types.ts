// components/ManagementProgram/types.ts

import { StaticImageData } from "next/image";

export type Benefit = {
  id: string;
  label: string;
};

export type ManagementProgramProps = {
  title?: string;
  description?: string[];
  benefits?: Benefit[];
  image?: StaticImageData;
};