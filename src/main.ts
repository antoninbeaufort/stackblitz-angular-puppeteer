import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <form>
    <input type="text"
  id="name"
  name="name" [(ngModel)]="emvcap" />
    <button type="button" (click)="btnValidate()" [disabled]="!emvcap">Submit</button> 
</form>
  `,
})
export class App {
  name = 'Angular';
  emvcap = '';
  btnValidate() {
    window.alert('coucou');
  }
}

bootstrapApplication(App);
