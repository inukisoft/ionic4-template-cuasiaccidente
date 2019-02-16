import { Injectable } from '@angular/core';
import { HOTELS } from "./mock-hotels";

@Injectable({
  providedIn: 'root'
})

export class HotelProvider {
    hotels: any;
    room: any;
    favoriteCounter: number = 0;
    favorites: Array<any> = [];
    bookingCounter: number = 0;
    bookings: Array<any> = [];

    constructor() {
        this.hotels = HOTELS;
    }

    getAll() {
        return this.hotels;
    }

    getItem(id) {
        for (var i = 0; i < this.hotels.length; i++) {
            if (this.hotels[i].id === parseInt(id)) {
                return this.hotels[i];
            }
        }
        return null;
    }

    getRoom(hotelID, roomID) {
        let hotel = this.getItem(hotelID);

        for (let i = 0; i < hotel.rooms.length; i++) {
            if (hotel.rooms[i].id === parseInt(roomID)) {
                return hotel.rooms[i];
            }
        }

        return null;
    }

    remove(item) {
        this.hotels.splice(this.hotels.indexOf(item), 1);
    }

    /////
    //For Search and Favorites
    ////
    findAll() {
        return Promise.resolve(this.hotels);
    }

    findById(id) {
        return Promise.resolve(this.hotels[id - 1]);
    }

    findByName(searchKey: string) {
        let key: string = searchKey.toUpperCase();
        return Promise.resolve(this.hotels.filter((property: any) =>
            (property.title + ' ' + property.address + ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1));
    }

    getFavorites() {
        return Promise.resolve(this.favorites);
    }

    getBookings() {
        return Promise.resolve(this.bookings);
    }

    favorite(hotel) {
        this.favoriteCounter = this.favoriteCounter + 1;
        let exist = false;

        if (this.favorites && this.favorites.length > 0) {
            this.favorites.forEach((val, i) => {
                if (val.hotel.id === hotel.id) {
                    exist = true;
                }
            });
        }

        if (!exist) {
            this.favorites.push({ id: this.favoriteCounter, hotel: hotel });
        }

        return Promise.resolve();
    }

    booking(hotel) {
        this.bookingCounter = this.bookingCounter + 1;
        let existb = false;

        if (this.bookings && this.bookings.length > 0) {
            this.bookings.forEach((val, i) => {
                if (val.hotel.id === hotel.id) {
                    existb = true
                }
            });
        }

        if (!existb) {
            this.bookings.push({ id: this.bookingCounter, hotel: hotel });
        }

        return Promise.resolve();
    }

    unfavorite(favorite) {
        let index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    }
}