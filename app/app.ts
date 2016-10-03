import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { AssessmentData } from './providers/assessment-data.provider';
// import '../node_modules/chart.js/dist/Chart.bundle.min.js';
// import { ChartRenderer } from './services/chart-renderer';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [AssessmentData]
})
export class MyApp {

  public rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);