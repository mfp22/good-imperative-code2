import { Component } from '@angular/core';

type CarModel = 'Chevy Volt' | 'Chevy Bolt' | 'Tesla Model 3';

@Component({
  selector: 'app-car3',
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
export class Car3Component {
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
  carModelUpdates = [] as ((newCarModel: CarModel) => void)[];
  changeCarModel = (newCarModel: CarModel) => {
    this.carModel = newCarModel;
    this.carModelUpdates.forEach((update) => update(newCarModel));
  };

  dummyProp1 = this.carModelUpdates.push((newCarModel: CarModel) => {
    this.zeroToSixtyTime = this.zeroToSixtyTimes[newCarModel];
  });
  zeroToSixtyTime = this.zeroToSixtyTimes[this.carModel];

  dummyProp2 = this.carModelUpdates.push((newCarModel: CarModel) => {
    this.price = this.prices[newCarModel];
  });
  price = this.prices[this.carModel];

  electricRangeUpdates = [] as ((newElectricRange: number) => void)[];
  dummyProp3 = this.carModelUpdates.push((newCarModel: CarModel) => {
    const newElectricRange = this.ranges[newCarModel];
    this.electricRange = newElectricRange;
    this.electricRangeUpdates.forEach((update) => update(newElectricRange));
  });
  electricRange = this.ranges[this.carModel];

  dummyProp4 = this.electricRangeUpdates.push((newElectricRange: number) => {
    this.canDriveLaToFresno = newElectricRange > 270 ? 'Yes' : 'No';
  });
  canDriveLaToFresno = this.electricRange > 270 ? 'Yes' : 'No';

  reset() {
    this.changeCarModel('Chevy Volt');
  }
}
