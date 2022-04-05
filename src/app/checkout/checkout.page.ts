import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThankYouComponent } from '../thank-you/thank-you.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async thankYou() {
    const modalCtrl = await this.modalCtrl.create({
      component: ThankYouComponent
    });
    await modalCtrl.present();
  }

}
