import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { TranslateProvider, ActivitiesService } from '../../providers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-checkout',
  templateUrl: './activity-checkout.page.html',
  styleUrls: ['./activity-checkout.page.scss'],
})
export class ActivityCheckoutPage implements OnInit {
  trip: any;
  tripID: any;
  paymethods: String = 'creditcard';

  public days = 3;
  public dateTo = new Date();

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public translate: TranslateProvider,
    private route: ActivatedRoute,
    public trips: ActivitiesService
  ) {
    this.tripID = this.route.snapshot.paramMap.get('tripID');
    this.trip = this.trips.getItem(this.tripID);
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
        message: 'your Trip was successfuly Book!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();

      setTimeout(() => {
        loader.dismiss();
        toast.present();

        this.navCtrl.navigateForward('/home');
      }, 3000);
    });
  }
}
