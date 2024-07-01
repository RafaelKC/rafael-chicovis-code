import { Routes } from '@angular/router';
import {ContactComponent} from "./screens/contact/contact.component";

export const ROUTES = [
  {
    path: 'send-message',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
] as Routes
