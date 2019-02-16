import { Injectable } from '@angular/core';
import { CARS } from './mock-cars';

@Injectable({
  providedIn: 'root'
})

export class CarsService {
  private cars: any;

  constructor() {
    this.cars = CARS;
  }

  getAll() {
    return this.cars;
  }

  getItem(id) {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].id === parseInt(id)) {
        return this.cars[i];
      }
    }
    return null;
  }

  getCar(carshopID, carID) {
    let carshop = this.getItem(carshopID);

    for (let i = 0; i < carshop.cars.length; i++) {
        if (carshop.cars[i].id === parseInt(carID)) {
            return carshop.cars[i];
        }
    }

    return null;
}  

  remove(item) {
    this.cars.splice(this.cars.indexOf(item), 1);
  }
}
