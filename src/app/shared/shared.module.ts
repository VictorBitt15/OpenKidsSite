import { CommonModule } from "@angular/common";
import { FooterComponent } from "./Footer/Footer.component";
import { NavbarHeaderComponent } from "./NavbarHeader/NavbarHeader.component";
import { PrimeNGModule } from "./PrimeNG/PrimeNG.module";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    NavbarHeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports: [
    NavbarHeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
