import {Page, ViewController} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/modals/member-modal.html'
})
export class MemberModal {

  constructor(private viewCtrl: ViewController) {
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }

}