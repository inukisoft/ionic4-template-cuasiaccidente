import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { TranslateProvider } from '../../providers';
import { LocalsessionService } from '../../localsession.service';
import { ValidateRut } from '../../validators/rut';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private translate: TranslateProvider,
    private formBuilder: FormBuilder,
    private localsessionService: LocalsessionService     
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    document.querySelector('video').play();


    this.onLoginForm = this.formBuilder.group({
      'password': [null, [Validators.required, ValidateRut]], 
      'email': [null, [Validators.required] ] 
      
    });

  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: this.translate.get('app.pages.login.label.paraque.dialog.header'),
      message: this.translate.get('app.pages.login.label.paraque.dialog.text'),
    
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
        
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    // TODO : Cambiar el campo password por "rut"
    this.localsessionService.rut = this.onLoginForm.get("password").value
    this.navCtrl.navigateRoot('/register');
  }
  
  submitForm(value:any) {
     this.goToHome();
  } 

  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }

}
