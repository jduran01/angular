import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    ContactComponent
  ],
  exports: [
    InicioComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
