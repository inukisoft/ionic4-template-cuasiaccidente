import { Injectable } from '@angular/core';
import { activities } from './mock-activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private activities: any;

  constructor() {
    this.activities = activities;
  }

  getAll() {
    return this.activities;
  }

  getItem(id) {
    for (var i = 0; i < this.activities.length; i++) {
      if (this.activities[i].id === parseInt(id)) {
        return this.activities[i];
      }
    }
    return null;
  }

  remove(item) {
    this.activities.splice(this.activities.indexOf(item), 1);
  }
}
