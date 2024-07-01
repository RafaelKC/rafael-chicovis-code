import {FileInfo} from "./file-info";
import {
  faAddressCard, faBrain,
  faBuildingColumns, faCertificate,
  faComputer, faDiagramProject,
  faK,
  faMessage, faPerson
} from "@fortawesome/free-solid-svg-icons";

export const FilesInfos = [
  {
    endpoint: 'presentation',
    name: 'Screens.Presentation',
    folder: false,
    icon: faPerson
  },
  {
    name: 'Screens.Knowledge',
    folder: true,
    defaultOpened: true,
    subFiles: [
      {
        endpoint: 'Knowledge/university',
        name: 'Screens.University',
        icon: faBuildingColumns,
      },
      {
        endpoint: 'Knowledge/certificates',
        name: 'Screens.Certificates',
        icon: faCertificate,
      },
      {
        endpoint: 'Knowledge/skills',
        name: 'Screens.Skills',
        icon: faBrain,
      }
    ]
  },
  {
    name: 'Screens.Experiences',
    folder: true,
    defaultOpened: true,
    subFiles: [
      {
        endpoint: 'experience/korp',
        name: 'Screens.Korp',
        icon: faK,
      },
      {
        endpoint: 'experience/projects',
        name: 'Screens.Projects',
        icon: faDiagramProject,
      }
    ]
  },
  {
    endpoint: 'setup',
    name: 'Screens.Setup',
    folder: false,
    icon: faComputer
  },
  {
    name: 'Screens.Contacts',
    folder: true,
    defaultOpened: true,
    subFiles: [
      {
        endpoint: 'contacts-info',
        name: 'Screens.ContactsInfo',
        icon: faAddressCard,
      },
      {
        endpoint: 'send-message',
        name: 'Screens.SendMessage',
        icon: faMessage,
      }
    ],
  }
] as FileInfo[]
