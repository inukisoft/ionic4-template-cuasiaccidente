import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-checkout',
  templateUrl: './hotel-checkout.page.html',
  styleUrls: ['./hotel-checkout.page.scss'],
})
export class HotelCheckoutPage implements OnInit {
  hotel: any;
  hotelID: string;
  room: any;
  roomID: any;
  paymethods: string = 'creditcard';
  // number of nights
  public nights = 7;
  // number of guests
  public guests = 3;
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
    public hotels: HotelProvider
  ) {
   this.hotelID = this.route.snapshot.paramMap.get('hotelID');
   this.roomID = this.route.snapshot.paramMap.get('roomID');
   this.hotel = this.hotels.getItem(this.hotelID);
   this.room = this.hotels.getRoom(this.hotelID, this.roomID)
  }

  ngOnInit() {
    console.log(this.room);
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
        message: 'your booking was successful!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();

      this.hotels.booking(this.hotel)
      .then(response => {
        setTimeout(() => {
          loader.dismiss();
          toast.present();
          // back to home page
          this.navCtrl.navigateForward('/home');
        }, 3000)
      });
    });
    // end
  }

}
