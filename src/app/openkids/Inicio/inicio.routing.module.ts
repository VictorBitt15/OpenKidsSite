import { RouterModule, Routes } from "@angular/router";
import { InicioComponent } from "./Inicio.component";
import { NgModule } from "@angular/core";

const inicioRoutes: Routes = [
  {
    path: '', component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(inicioRoutes)],
  exports: [RouterModule]
})
export class InicioRoutingModule {}
