import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: '/openkids',pathMatch:'full'},
  {
    path:'openkids', loadChildren:()=> import('./openkids/openkids.module').then(m=>m.OpenkidsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
