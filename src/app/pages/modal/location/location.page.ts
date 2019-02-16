import { Component, Input, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @Input() fromto: any;
  @Input() search: any;
  // places
  places: any = {
    nearby: [
      {
        id: 1,
        name: "Current Location"
      },
      {
        id: 2,
        name: "Rio de Janeiro, Brazil"
      },
      {
        id: 3,
        name: "São Paulo, Brazil"
      },
      {
        id: 4,
        name: "New York, United States"
      },
      {
        id: 5,
        name: "London, United Kingdom"
      },
      {
        id: 6,
        name: "Same as pickup"
      }
    ],
    recent: [
      {
        id: 1,
        name: "Rio de Janeiro"
      }
    ]
  };

  searchterm: string = '';
  results: any;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private storage: Storage 
  ) { }

  ngOnInit() {
    console.log(this.fromto);
    this.results = this.places.nearby;
    console.log(this.results);
  }

  setFilteredItems(ev: any) {
    let val = ev ? ev.target.value : '';

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      // this.showItems = true;
      this.results = this.places.nearby.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.results = this.places.nearby;
    }

    // return this.places.nearby.filter((item) => {
    //   return item.name.includes(term);
    // });  
  }

  searchBy(item) {
    if (this.fromto === 'from') {
      this.storage.set('pickup', item.name);
      this.search.pickup = item.name;
    }

    if (this.fromto === 'to') {
      this.storage.set('dropOff', item.name);
      this.search.dropOff = item.name;
    }
    
    this.modalCtrl.dismiss();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
