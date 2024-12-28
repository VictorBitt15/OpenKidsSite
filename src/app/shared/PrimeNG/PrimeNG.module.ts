import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar'
import { ImageModule } from 'primeng/image';
const MODULES=[
  MenubarModule,
  ImageModule

]

@NgModule({
  exports: [MODULES],
})
export class PrimeNGModule { }
