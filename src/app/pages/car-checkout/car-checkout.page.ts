import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { TranslateProvider, CarsService } from '../../providers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-checkout',
  templateUrl: './car-checkout.page.html',
  styleUrls: ['./car-checkout.page.scss'],
})
export class CarCheckoutPage implements OnInit {
  carshop: any;
  carshopID: String;
  car: any;
  carID: any;
  paymethods: String = 'creditcard';
  // number of nights
  public days = 3;
  // date from
  public dateFrom = new Date();
  // date to
  public dateTo = new Date();

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    private route: ActivatedRoute,
    public cars: CarsService
  ) {
    this.carshopID = this.route.snapshot.paramMap.get('carshopID');
    this.carID = this.route.snapshot.paramMap.get('carID');
    this.carshop = this.cars.getItem(this.carshopID);
    this.car = this.cars.getCar(this.carshopID, this.carID);
  }

  ngOnInit() {
  }

  async makeBooking() {
    // send booking info
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: false,
        cssClass: 'bg-profile',
        message: 'your Car was successfuly Rent!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();

      setTimeout(() => {
        loader.dismiss();
        toast.present();
        // back to home page
        this.navCtrl.navigateForward('/home');
      }, 3000);
    });
    // end
  }
}
