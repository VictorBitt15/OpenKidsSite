import { Component, OnInit } from '@angular/core';
import moment from 'moment';
@Component({
  selector: 'app-Footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.css'],
  standalone:false
})
export class FooterComponent {

  ano: number;
  constructor() {
    this.ano = moment().year();
  }

}
