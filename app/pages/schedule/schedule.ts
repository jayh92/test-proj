import { Component } from '@angular/core';
import { ModalController, Modal, NavController } from 'ionic-angular';
import { ScheduleModal } from '../modals/schedule-modal';

@Component({
  templateUrl: 'build/pages/schedule/schedule.html'
})
export class SchedulePage {
  constructor(public navCtrl: NavController,  public modalCtrl: ModalController) {
  }
  popScheduleModal() {
    let scheduleModal = this.modalCtrl.create(ScheduleModal, {});
    scheduleModal.present();
  }
}
