import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenkidsComponent } from './openkids.component';
import { InicioComponent } from './Inicio/Inicio.component';

const routes: Routes = [
  {
    path:'',
    component:OpenkidsComponent,
    children:[
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: 'inicio',
        loadChildren:()=> import('./Inicio/inicio.module').then(m=>m.InicioModule)
      },
    ]
   },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class OpenKidsRoutingModule {

}
