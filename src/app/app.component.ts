import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-car1 *ngIf="level === 1"></app-car1>
    <app-car2 *ngIf="level === 2"></app-car2>
    <app-car3 *ngIf="level === 3"></app-car3>
    <app-car4 *ngIf="level === 4"></app-car4>
    <app-car5 *ngIf="level === 5"></app-car5>
  `,
})
export class AppComponent {
  level = 5;
}
