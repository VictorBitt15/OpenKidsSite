import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenkidsComponent } from './openkids.component';
import { OpenKidsRoutingModule } from './openkids.routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrimeNGModule } from '../shared/PrimeNG/PrimeNG.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PrimeNGModule,
    OpenKidsRoutingModule
  ],
  declarations: [OpenkidsComponent]
})
export class OpenkidsModule { }
