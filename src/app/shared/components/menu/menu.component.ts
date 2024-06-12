import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ' ',
      },
      {
        label: 'Numbers',
        icon: 'pi pi-star',
        routerLink: 'numbers',
      },
      {
        label: 'Otros',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Pipes',
            icon: 'pi pi-bolt',
            routerLink: 'common',
          },
          {
            label: 'Custom Pipes',
            icon: 'pi pi-server',
            routerLink: 'custom',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apolo',
                icon: 'pi pi-palette',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ];
  }
}
