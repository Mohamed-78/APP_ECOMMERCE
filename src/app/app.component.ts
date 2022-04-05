import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UtilService } from './util.service';
import { menuController } from '@ionic/core';
import { Platform, NavController,ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public isMenuEnabled:boolean = true;
  public selectedIndex = 0;

  constructor(
    //private storage: Storage,
    private platform: Platform,
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar,
    private router: Router,
    private util: UtilService,
    private navCtrl: NavController,
    private modalCtrl: ModalController) {

      this.initializeApp();
    }

    initializeApp() {
     this.platform.ready().then(() => {
        //this.statusBar.styleDefault();
        //this.splashScreen.hide();
      });
    }

    async ngOnInit() {
      //await this.storage.create();
      this.selectedIndex = 1;

      this.util.getMenuState().subscribe(menuState => {
        this.isMenuEnabled = menuState;
      });
    }

    navigate(path, selectedId) {
      this.selectedIndex = selectedId;
      this.router.navigate([path]);
    }

    close() {
      menuController.toggle();
    }

}