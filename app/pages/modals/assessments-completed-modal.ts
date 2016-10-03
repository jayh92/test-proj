import {Page, ViewController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/modals/assessments-completed-modal.html'
})
export class AssessmentsCompletedModal {

  constructor(private viewCtrl: ViewController) {
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}