import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'OpenKids';
  

  ngOnInit() {

    }
}
