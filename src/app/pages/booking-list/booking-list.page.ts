import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.page.html',
  styleUrls: ['./booking-list.page.scss'],
})

export class BookingListPage implements OnInit {
  bookings: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public hotels: HotelProvider    
  ) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings() {
    this.hotels.getBookings()
      .then(data => { this.bookings = data; });
  }

}
