import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { TranslateProvider, HotelProvider } from '../../providers';
import { Area } from '../../area';
import { Equipo } from '../../equipo';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { ApiService } from '../../api.service';
import { LocalsessionService } from '../../localsession.service';
import { Cuasi } from '../../cuasi';


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
  cuasi: Cuasi =  new Cuasi();  
  cuasi_response: any;

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
    private formBuilder: FormBuilder,
    private localsessionService: LocalsessionService 
  ) {

  }


  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'area': [null, Validators.required],
      'equipo': [null, Validators.required],
      'fechacuasi': [new Date().toISOString(), Validators.required],
      'describa': [null, Validators.nullValidator],
      'accion': [null, Validators.nullValidator],
      'informo': [null, Validators.nullValidator],
      'tipotrabajador': ['ccu', Validators.nullValidator]

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

  async addCuasi(cuasi:Cuasi) {
    const loading = await this.loadingCtrl.create({message : 'Loading ...'});
    await loading.present();
    await this.api.addCuasi(cuasi)
      .subscribe(res => {
        this.cuasi_response = res;
        console.log("cuasi_response : " + this.cuasi_response);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }


  async onFormSubmit(form:NgForm) {

    //this.navCtrl.navigateRoot('/tabs/seccion3' );
    this.localsessionService.area = this.productForm.get("area").value;
    this.localsessionService.equipo = this.productForm.get("equipo").value;
    this.localsessionService.rut = "13635509-0"
    this.localsessionService.fechacuasi = this.productForm.get("fechacuasi").value;
    this.localsessionService.describa = this.productForm.get("describa").value;
    this.localsessionService.accion = this.productForm.get("accion").value;

    console.log("this.localsessionService.rut :" + this.localsessionService.rut);
    console.log("this.localsessionService.area :" + this.localsessionService.area);
    console.log("this.localsessionService.equipo :" + this.localsessionService.equipo);
    console.log("this.localsessionService.fechacuasi :" + this.localsessionService.fechacuasi);
    console.log("this.localsessionService.describa :" + this.localsessionService.describa);
    console.log("this.localsessionService.accion :" + this.localsessionService.accion);
    console.log("this.localsessionService.informo :" + this.localsessionService.informo);

    
    //this.cuasi.rut = this.localsessionService.rut;
    this.cuasi.rut = this.localsessionService.rut == null ? "11111111-1" : this.localsessionService.rut ;
    this.cuasi.area = this.localsessionService.area;    
    this.cuasi.equipo = this.localsessionService.equipo;
    this.cuasi.fechacuasi = this.localsessionService.fechacuasi;
    this.cuasi.describa = this.localsessionService.describa;        
    this.cuasi.accion = this.localsessionService.accion == null ? 0 : this.localsessionService.accion;
    this.cuasi.tipotrabajador = this.localsessionService.tipotrabajador;
    this.cuasi.informo = this.localsessionService.informo == null ? 0: this.localsessionService.informo;

    this.addCuasi(this.cuasi);

    this.navCtrl.navigateRoot('enviado' );

  }
 



}
