import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})

export class FavoritesPage implements OnInit {
  favorites: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    private translate: TranslateProvider,
    public hotels: HotelProvider
  ) { }

  ngOnInit() {
    this.getFavorites();
  }

  deleteItem(favorite) {
    this.hotels.unfavorite(favorite)
      .then(() => {
        this.getFavorites();
      })
      .catch(error => alert(JSON.stringify(error)));
  }

  getFavorites() {
    this.hotels.getFavorites()
      .then(data => { this.favorites = data; });
  }

}
