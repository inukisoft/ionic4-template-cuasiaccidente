import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { TranslateProvider } from '../../providers';
import { Storage } from '@ionic/storage';

import { LocationPage } from './../modal/location/location.page';

@Component({
  selector: 'app-rentcar',
  templateUrl: './rentcar.page.html',
  styleUrls: ['./rentcar.page.scss'],
})
export class RentcarPage implements OnInit {
  toppings: any;
  search: any = {
    pickup: 'Rio de Janeiro, Brazil',
    dropOff: 'Same as pickup',
    from: new Date().toISOString(),
    to: new Date().toISOString()
  };

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private storage: Storage
    ) { }

  ngOnInit() {
    this.storage.get('pickup').then((val) => {
      // console.log(val)
      if (val === null) {
        this.search.pickup = 'Rio de Janeiro, Brazil';
      } else {
        this.search.pickup = val;
      }
      // this.search.pickup = val;
      console.log(this.search.pickup);
    }).catch((err) => {
      console.log(err);
    });

    this.storage.get('dropOff').then((val) => {
      if (val === null) {
        this.search.dropOff = 'Same as pickup';
      } else {
        this.search.dropOff = val;
      }
      // this.search.dropOff = val;
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
    this.navCtrl.navigateForward('cars-list');
  }
}
