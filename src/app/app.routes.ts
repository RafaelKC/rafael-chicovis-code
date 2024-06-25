import { Routes } from '@angular/router';
import {Teste1Component} from "./teste/teste1/teste1.component";
import {Teste2Component} from "./teste/teste2/teste2.component";

export const ROUTES = [
  {
    path: '',
    component: Teste1Component
  },
  {
    path: 'teste',
    component: Teste2Component
  },
  {
    path: '**',
    redirectTo: ''
  }
] as Routes
