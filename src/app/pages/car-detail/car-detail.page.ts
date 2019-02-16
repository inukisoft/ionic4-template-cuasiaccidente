import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateProvider, CarsService } from '../../providers';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage implements OnInit {
  carshop: any;
  carID: any = this.route.snapshot.paramMap.get('id');
  // carSegment: string = 'details';

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private translate: TranslateProvider,
    public cars: CarsService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.carshop = this.cars.getItem(this.carID);
  }

  checkout(carshopID: number, carID: number) {
    this.navCtrl.navigateForward(`car-checkout/${carshopID}/${carID}`);
  }

}
