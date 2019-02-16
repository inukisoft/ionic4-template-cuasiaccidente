import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { Area } from '../../area';
import { Equipo } from '../../equipo';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productForm: FormGroup; 


  openMenu: Boolean = false;
  searchQuery: String = '';
  items: string[];
  showItems: Boolean = false;


  areas: Area[] = [];
  equipos: Equipo[] = [];

  equipo: any;
  area: any;

  adults: any;

  childs: any = 0;
  children: number;
  hotellocation: string;

  agmStyles: any[] = environment.agmStyles;


  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    public hotels: HotelProvider,
    public api: ApiService, 
    private formBuilder: FormBuilder
  ) {

  }


  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'area': [null, Validators.required],
      'equipo': [null, Validators.required],
      'fechacuasi': [new Date().toISOString(), Validators.required],
      'describa': [null, Validators.nullValidator],
      'accion': [null, Validators.required],
      'informo': [null, Validators.required],

    });
    this.getAreas();
    this.getEquipos();
  }




  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  initializeItems() {
    this.items = [
      'La Belle Place - Rio de Janeiro',
      'Marshall Hotel - Marshall Islands',
      'Maksoud Plaza - São Paulo',
      'Hotel Copacabana - Rio de Janeiro',
      'Pousada Marés do amanhã - Maragogi'
    ];
  }

  itemSelected(item: string) {
    this.hotellocation = item;
    this.showItems = false;
  }

  childrenArr(chil) {
    const child = Number(chil);
    this.childs = Array(child).fill(0).map((v, i) => i);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.showItems = true;
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.showItems = false;
    }
  }

  // togglePopupMenu() {
  //   return this.openMenu = !this.openMenu;
  // }
  // // //
  async viewHotels() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateForward('hotel-list');
    });
  }

  editprofile() {
    this.navCtrl.navigateForward('edit-profile');
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  goToWalk() {
    this.navCtrl.navigateRoot('walkthrough');
  }

  logout() {
    this.navCtrl.navigateRoot('login');
  }

  register() {
    this.navCtrl.navigateForward('register');
  }

  messages() {
    this.navCtrl.navigateForward('messages');
  }


  async getAreas() {
    const loading = await this.loadingCtrl.create({message : 'Loading ...'});
    await loading.present();
    await this.api.getAreas()
      .subscribe(res => {
        this.areas = res;
        console.log(this.areas);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }


  async getEquipos() {
    const loading = await this.loadingCtrl.create({message : 'Loading ...'});
    await loading.present();
    await this.api.getEquipos()
      .subscribe(res => {
        this.equipos = res;
        console.log(this.equipos);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async onFormSubmit(form:NgForm) {

    //this.navCtrl.navigateRoot('/tabs/seccion3' );


  }
 



}
