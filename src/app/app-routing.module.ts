import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
    imports: [
    RouterModule.forRoot( routes )
    ],
    exports: [
     RouterModule
    ]
})
export class AppRoutingModule { }
