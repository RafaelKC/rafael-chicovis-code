import {FileInfo} from "./file-info";
import {faHtml5} from "@fortawesome/free-brands-svg-icons";

export const FilesInfos = [
  {
    endpoint: '',
    name: 'bcb',
    folder: true,
    defaultOpened: true,
    subFiles: [
      {
        endpoint: 'teste',
        name: 'ABC',
        icon:  faHtml5,
        iconColor: '#E34C26'
      }
    ]
  }
] as FileInfo[]
