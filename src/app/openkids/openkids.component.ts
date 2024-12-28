import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-openkids',
  templateUrl: './openkids.component.html',
  styleUrls: ['./openkids.component.css'],
  standalone: false
})
export class OpenkidsComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Início',
          icon: 'pi pi-home'
      },
      {
          label: 'Calendário',
          icon: 'pi pi-star'
      },
      {
          label: 'Ranking',
          icon: 'pi pi-search',
          items: [
              {
                  label: 'Components',
                  icon: 'pi pi-bolt'
              },
              {
                  label: 'Blocks',
                  icon: 'pi pi-server'
              },
              {
                  label: 'UI Kit',
                  icon: 'pi pi-pencil'
              },
              {
                  label: 'Templates',
                  icon: 'pi pi-palette',
                  items: [
                      {
                          label: 'Apollo',
                          icon: 'pi pi-palette'
                      },
                      {
                          label: 'Ultima',
                          icon: 'pi pi-palette'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Resultados',
          icon: 'pi pi-envelope'
      },
      {
        label:'Fotos',
        icon:'pi pi-camera'
      },
      {
        label:'Informações',
        icon:'pi pi-info'
      }
    ]
  }

}
