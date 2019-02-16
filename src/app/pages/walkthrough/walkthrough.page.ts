import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})

export class WalkthroughPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  showSkip = true;
  slideOpts = {
    effect: 'flip',
    speed: 1000
  };
  dir: String = 'ltr';

  slideList: Array<any> = [
    {
      title: 'Descripción del aplicativo <strong>Título</strong>?',
      description: 'Acá va un texto largo, bueno, algo debe ir para completar la presentación del uso de este producto (esto es meramente informativo y de presentación)',
      image: 'assets/img/hotel-sp01.png',
    }
  ];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public router: Router
  ) {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  onSlideNext() {
    this.slides.slideNext(1000, false);
  }

	onSlidePrev() {
    this.slides.slidePrev(300);
  }

  // onLastSlide() {
  // 	this.slides.slideTo(3, 300)
  // }

  openHomePage() {
    this.navCtrl.navigateRoot('/home');
    // this.router.navigateByUrl('/tabs/(home:home)');
  }

  openLoginPage() {
    this.navCtrl.navigateForward('/login');
  }

}
