import { Routes } from '@angular/router';
import {ContactComponent} from "./screens/contact/contact.component";
import {ContactInfoComponent} from "./screens/contact/contact-info/contact-info.component";

export const ROUTES = [
  {
    path: 'send-message',
    component: ContactComponent
  },
  {
    path: 'contacts-info',
    component: ContactInfoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
] as Routes
