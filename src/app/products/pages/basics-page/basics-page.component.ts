import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'luis carlos';
  public nameUpper: string = 'LUIS CARLOS';
  public fullName: string = 'lUiS aLMeNaReZ';

  public customDate: Date = new Date();
}
