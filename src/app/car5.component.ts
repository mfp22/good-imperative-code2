import { Component } from '@angular/core';
import { adapt } from '@state-adapt/angular';
import { buildAdapter } from '@state-adapt/core';

type CarModel = 'Chevy Volt' | 'Chevy Bolt' | 'Tesla Model 3';

@Component({
  selector: 'app-car5',
  template: `
    <h1>Electric Cars</h1>
    <select (change)="carModel.set($any($event).target.value)">
      <option *ngFor="let model of models" [value]="model">
        {{ model }}
      </option>
    </select>
    <br />
    <br />
    <table>
      <tr>
        <td>Car Model</td>
        <td>{{ carModel.state$ | async }}</td>
      </tr>
      <tr>
        <td>0-60 Time</td>
        <td>{{ carModel.zeroToSixtyTime$ | async }}</td>
      </tr>
      <tr>
        <td>Price</td>
        <td>{{ carModel.price$ | async }}</td>
      </tr>
      <tr>
        <td>Electric Range</td>
        <td>{{ carModel.electricRange$ | async }}</td>
      </tr>
      <tr>
        <td>Can drive electric nonstop from LA to Fresno</td>
        <td>{{ carModel.canDriveLaToFresno$ | async }}</td>
      </tr>
    </table>
    <br />
    <br />
    <button (click)="carModel.reset()">Reset</button>
  `,
})
export class Car5Component {
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

  adapter = buildAdapter<CarModel>()({})({
    zeroToSixtyTime: (s) => this.zeroToSixtyTimes[s.state],
    price: (s) => this.prices[s.state],
    electricRange: (s) => this.ranges[s.state],
  })({
    canDriveLaToFresno: (s) => (s.electricRange > 270 ? 'Yes' : 'No'),
  })();

  carModel = adapt(['car', 'Chevy Volt' as CarModel], this.adapter);
}
