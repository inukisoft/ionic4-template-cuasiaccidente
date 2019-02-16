import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { TranslateProvider } from '../../providers';
import { Storage } from '@ionic/storage';

import { LocationPage } from './../modal/location/location.page';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {
  search: any = {
    dropOff: 'Rio de Janeiro, Brazil',
    to: new Date().toISOString()
  };

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('dropOff').then((val) => {
      if (val === null) {
        this.search.dropOff = 'Rio de Janeiro, Brazil';
      } else {
        this.search.dropOff = val;
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  async choosePlace(fromto: string) {
    const modal = await this.modalCtrl.create({
      component: LocationPage,
      componentProps: { fromto: fromto, search: this.search }
    });
    return await modal.present();
  }

  doSearch() {
    this.navCtrl.navigateForward('activity-list');
  }

}
