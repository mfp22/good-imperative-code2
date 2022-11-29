import { Injectable } from '@angular/core';

type CarModel = 'Chevy Volt' | 'Chevy Bolt' | 'Tesla Model 3';

// https://www.chevrolet.com/electric/shopping/configurator/summary?configCode=2023%2B1FC48_2LT%2B2LT%2BAR7%2BEN0%2BFE9%2BG7X%2BHSF%2BIOS%2BJSA%2BK4C%2BKSG%2BMMF%2BUQA%2BUSS&make=Chevrolet&model=Bolt%20EV&radius=1025&year=2023&zipCode=84005
// https://www.tesla.com/model3/design#overview

@Injectable({ providedIn: 'root' })
export class AppService {
  ranges = {
    'Chevy Volt': 63,
    'Chevy Bolt': 259,
    'Tesla Model 3': 272,
  };
  prices = {
    'Chevy Volt': 'N/A (Discontinued)',
    'Chevy Bolt': '$33,265',
    'Tesla Model 3': '$46,990',
  };
  zeroToSixtyTimes = {
    'Chevy Volt': '6.3 seconds',
    'Chevy Bolt': '7.15 seconds',
    'Tesla Model 3': '5.8 seconds',
  };
  models = Object.keys(this.ranges) as CarModel[];

  car = 'Chevy Volt' as CarModel;
  price = this.prices[this.car];
  electricRange = this.ranges[this.car];
  zeroToSixtyTime = this.zeroToSixtyTimes[this.car];

  changeCar(newCarEvent: Event) {
    const newCar = (newCarEvent as any).target.value as CarModel;
    this.car = newCar;
    this.price = this.prices[newCar];
    this.electricRange = this.ranges[newCar];
    this.zeroToSixtyTime = this.zeroToSixtyTimes[newCar];
  }
}
