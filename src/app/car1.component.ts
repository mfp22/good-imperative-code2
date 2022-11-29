import { Component } from '@angular/core';

type CarModel = 'Chevy Volt' | 'Chevy Bolt' | 'Tesla Model 3';

@Component({
  selector: 'app-car1',
  template: `
    <h1>Electric Cars</h1>
    <select (change)="changeCarModel($any($event).target.value)">
      <option *ngFor="let model of models" [value]="model">
        {{ model }}
      </option>
    </select>
    <br />
    <br />
    <table>
      <tr>
        <td>Car Model</td>
        <td>{{ carModel }}</td>
      </tr>
      <tr>
        <td>0-60 Time</td>
        <td>{{ zeroToSixtyTime }}</td>
      </tr>
      <tr>
        <td>Price</td>
        <td>{{ price }}</td>
      </tr>
      <tr>
        <td>Electric Range</td>
        <td>{{ electricRange }}</td>
      </tr>
      <tr>
        <td>Can drive electric nonstop from LA to Fresno</td>
        <td>{{ canDriveLaToFresno }}</td>
      </tr>
    </table>
    <br />
    <br />
    <button (click)="reset()">Reset</button>
  `,
})
export class Car1Component {
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

  carModel = 'Chevy Volt' as CarModel;
  zeroToSixtyTime = this.zeroToSixtyTimes[this.carModel];
  price = this.prices[this.carModel];
  electricRange = this.ranges[this.carModel];
  canDriveLaToFresno = this.electricRange > 270 ? 'Yes' : 'No';

  changeCarModel(newCarModel: CarModel) {
    this.carModel = newCarModel;
    this.zeroToSixtyTime = this.zeroToSixtyTimes[newCarModel];
    this.price = this.prices[newCarModel];
    this.electricRange = this.ranges[newCarModel];
    this.canDriveLaToFresno = this.electricRange > 270 ? 'Yes' : 'No';
  }

  reset() {
    this.changeCarModel('Chevy Volt');
  }
}
