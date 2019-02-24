import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-enviado',
  templateUrl: './enviado.page.html',
  styleUrls: ['./enviado.page.scss'],
})
export class EnviadoPage implements OnInit {

  maxTime: any=7000;
  
  constructor(
    public navCtrl: NavController,

  	) { }

  ngOnInit() {
    
    setTimeout(() => {
        // this.navCtrl.popToRoot();
        // might try this instead
        this.navCtrl.navigateRoot('');
    }, this.maxTime);

  }

}
