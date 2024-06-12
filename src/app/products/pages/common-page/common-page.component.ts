import { Component } from '@angular/core';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.css',
})
export class CommonPageComponent {
  // i18n Select
  public name: string = 'Luis Carlos';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18Plural
  public clients: string[] = [
    'María',
    'Pedro',
    'Luis',
    'Carlos',
    'Natalia',
    'Melissa',
  ];

  public clientsMaps = {
    '=0': '0 clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }
}
