import { Component, OnInit } from '@angular/core';
import { ModalController, Modal, NavController } from 'ionic-angular';
import { Member } from '../../models/member';
import { MemberModal } from '../modals/member-modal';
import { Task } from '../../models/task';

@Component({
  templateUrl: 'build/pages/tasks/tasks.html'
})

export class TasksPage {
  allTasks: any;
  displayTasks: any;
  members: any;
  emptyTasks = "";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.navCtrl = navCtrl;
    this.members = [
      {
        "id": 1, 
        "firstName": "Calvin",
        "lastName": "Broadus", 
        "facility": "LBC",
        "memberStatus": "Diagnosed", 
        "healthStatus": "Critical",
        "nextInPerson": "9/1/2016",
        "nextPhone": "9/27/2017"
      },
      {
        "id": 2, 
        "firstName": "Ed",
        "lastName": "Davis",
        "facility": "MCV",
        "memberStatus": "Waiting", 
        "healthStatus": "N/A",
        "nextInPerson": "1/1/2017",
        "nextPhone": "9/27/2017"
      },
      {
        "id": 3, 
        "firstName": "John",
        "lastName": "Doe",
        "facility": "Chantilly",
        "memberStatus": "Diagnosed", 
        "healthStatus": "Critical",
        "nextInPerson": "1/1/2017",
        "nextPhone": "9/27/2017"
      },
      {
        "id": 4, 
        "firstName": "Nasir",
        "lastName": "Jones",
        "facility": "NYC",
        "memberStatus": "Diagnosed", 
        "healthStatus": "Critical",
        "nextInPerson": "1/1/2017",
        "nextPhone": "9/27/2017"
      }
    ];
    this.allTasks = [
      {
          "id": 1, 
          "npName": "NP Name 1", 
          "memberName": "Joe Cocker",
          "type": "", 
          "scheduleDate": "1/1/2017",
          "completedDate": "",
          "status": "incomplete",
          "description": "This is a test description1."
      },
      {
          "id": 2, 
          "npName": "NP Name 1", 
          "memberName": "Jimmy Page",
          "type": "overdue", 
          "scheduleDate": "9/30/2016",
          "completedDate": "",
          "status": "incomplete",
          "description": "This is a test description2."
      },
      {
          "id": 3, 
          "npName": "NP Name 1", 
          "memberName": "Van McCann",
          "type": "", 
          "scheduleDate": "1/1/2017",
          "completedDate": "9/27/2016",
          "status": "complete",
          "description": "This is a test description3."
      }
    ];
    this.displayTasks = this.getDisplayTasks("incomplete");
  }

  getDisplayTasks(status: string) {
    return this.allTasks.filter(function (ct) {
      return ct.status == status;
    });
  }
  setDisplayTasks(status: string) {
    this.displayTasks = this.allTasks.filter(function (ct) {
      return ct.status == status;
    });
  }
  linkToCompass(member: Member) {
    // open modal with deep link message
    let memberModal = this.modalCtrl.create(MemberModal, {});
    memberModal.present();
  }
  linkToCompass2() {
    // open modal with deep link message
    let memberModal = this.modalCtrl.create(MemberModal, {});
    memberModal.present();
  }
}