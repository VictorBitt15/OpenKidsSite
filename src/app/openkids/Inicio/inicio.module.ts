import { NgModule } from "@angular/core";
import { InicioComponent } from "./Inicio.component";
import { InicioRoutingModule } from "./inicio.routing.module";
import { SharedModule } from "../../shared/shared.module";
import { DialogModule } from "primeng/dialog";
import { PrimeNGModule } from "../../shared/PrimeNG/PrimeNG.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    DialogModule,
    SharedModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
