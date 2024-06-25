import {IconDefinition} from "@fortawesome/angular-fontawesome";

export type FileInfo = {
  icon?: IconDefinition,
  name: string,
  defaultOpened: boolean,
  folder: boolean,
  endpoint: string,
  iconColor?: string,
  subFiles: FileInfo[]
}
