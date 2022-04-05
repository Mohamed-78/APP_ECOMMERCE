import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent implements OnInit {

  constructor(private modalCtrl: ModalController,private navCtrl: NavController) { }

  ngOnInit() {}

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  backToHome(){
    this.modalCtrl.dismiss();
    this.navCtrl.navigateForward('/home');
  }

}
