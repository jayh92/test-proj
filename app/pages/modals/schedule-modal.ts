import {Page, ViewController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/modals/schedule-modal.html'
})
export class ScheduleModal {

  constructor(private viewCtrl: ViewController) {
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
}