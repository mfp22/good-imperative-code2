import { Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

type CarModel = 'Chevy Volt' | 'Chevy Bolt' | 'Tesla Model 3';

@Component({
  selector: 'app-car4',
  template: `
    <h1>Electric Cars</h1>
    <select (change)="carModel$.next($any($event).target.value)">
      <option *ngFor="let model of models" [value]="model">
        {{ model }}
      </option>
    </select>
    <br />
    <br />
    <table>
      <tr>
        <td>Car Model</td>
        <td>{{ carModel$ | async }}</td>
      </tr>
      <tr>
        <td>0-60 Time</td>
        <td>{{ zeroToSixtyTime$ | async }}</td>
      </tr>
      <tr>
        <td>Price</td>
        <td>{{ price$ | async }}</td>
      </tr>
      <tr>
        <td>Electric Range</td>
        <td>{{ electricRange$ | async }}</td>
      </tr>
      <tr>
        <td>Can drive electric nonstop from LA to Fresno</td>
        <td>{{ canDriveLaToFresno$ | async }}</td>
      </tr>
    </table>
    <br />
    <br />
    <button (click)="reset()">Reset</button>
  `,
})
export class Car4Component {
  zeroToSixtyTimes = {
    'Chevy Volt': '6.3 seconds',
    'Chevy Bolt': '7.15 seconds',
    'Tesla Model 3': '5.8 seconds',
  };
  prices = {
    'Chevy Volt': 'N/A (Discontinued)',
    'Chevy Bolt': '$33,265',
    'Tesla Model 3': '$46,990',
  };
  ranges = {
    'Chevy Volt': 63,
    'Chevy Bolt': 259,
    'Tesla Model 3': 272,
  };
  models = Object.keys(this.ranges) as CarModel[];

  carModel$ = new BehaviorSubject('Chevy Volt' as CarModel);

  zeroToSixtyTime$ = this.carModel$.pipe(
    map((newCarModel) => this.zeroToSixtyTimes[newCarModel])
  );

  price$ = this.carModel$.pipe(map((newCarModel) => this.prices[newCarModel]));

  electricRange$ = this.carModel$.pipe(
    map((newCarModel) => this.ranges[newCarModel])
  );

  canDriveLaToFresno$ = this.electricRange$.pipe(
    map((newElectricRange) => (newElectricRange > 270 ? 'Yes' : 'No'))
  );

  reset() {
    this.carModel$.next('Chevy Volt');
  }
}
