import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Assessment } from '../../models/assessment';

@Component({
  templateUrl: 'build/pages/assessments/assessment-detail.html'
})
export class AssessmentDetailPage {
  // assessment: Assessment;
  assessment: any;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.navCtrl = navCtrl;
    this.assessment = this.navParams.get('assessment');
  }
}
