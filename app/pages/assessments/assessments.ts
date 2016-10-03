import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Assessment } from '../../models/assessment';
// import { AssessmentsData } from '../../data/assessments.data';
import { AssessmentDetailPage } from '../assessments/assessment-detail';
import {AssessmentData} from '../../providers/assessment-data.provider';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/assessments/assessments.html'
})

export class AssessmentsPage {
  // assessmentsData: Assessment[];
  assessmentsData: any;
  constructor(public navCtrl: NavController, private assessments: AssessmentData) {
    this.navCtrl = navCtrl;
    // assessments
    //   .load()
    //   .then(assessmentsData => this.assessmentsData = assessmentsData)
    this.assessmentsData = [
        {
            "id": 1, 
            "name": "User 1", 
            "dob": "9/27/1975",
            "type": "Returned", 
            "city": "Richmond",
            "state": "VA", 
            "zip": "23220",
            "scheduleDate": "1/1/2017",
            "completedDate": "9/27/2016",
            "status": "Closed"
        },
        {
            "id": 2, 
            "name": "User 2", 
            "dob": "9/27/1975",
            "type": "Overdue", 
            "city": "Chantilly",
            "state": "VA", 
            "zip": "23220",
            "scheduleDate": "1/1/2017",
            "completedDate": "",
            "status": "Open"
        },
        {
            "id": 3, 
            "name": "User 3", 
            "dob": "9/27/1975",
            "type": "Incomplete", 
            "city": "Henrico",
            "state": "VA", 
            "zip": "23220",
            "scheduleDate": "1/1/2017",
            "completedDate": "",
            "status": "Open"
        },
        {
            "id": 4, 
            "name": "User 4", 
            "dob": "9/27/1975",
            "type": "Incomplete", 
            "city": "Chantilly",
            "state": "VA", 
            "zip": "23220",
            "scheduleDate": "1/1/2017",
            "completedDate": "",
            "status": "Open"
        },
        {
            "id": 5, 
            "name": "User 5", 
            "dob": "9/27/1975",
            "type": "Overdue", 
            "city": "Richmond",
            "state": "VA", 
            "zip": "23220",
            "scheduleDate": "1/1/2017",
            "completedDate": "",
            "status": "Open"
        },
        {
            "id": 6, 
            "name": "User 6", 
            "dob": "9/27/1975",
            "type": "Overdue", 
            "city": "Richmond",
            "state": "VA", 
            "zip": "23220",
            "scheduleDate": "1/1/2017",
            "completedDate": "",
            "status": "Open"
        },
        {
            "id": 5, 
            "name": "User 5", 
            "dob": "9/27/1975",
            "type": "Overdue", 
            "city": "Richmond",
            "state": "VA", 
            "zip": "23220",
            "scheduleDate": "1/1/2017",
            "completedDate": "",
            "status": "Open"
        },
        {
            "id": 7, 
            "name": "User 7", 
            "dob": "9/27/1975",
            "type": "Overdue", 
            "city": "Richmond",
            "state": "VA", 
            "zip": "23220",
            "scheduleDate": "1/1/2017",
            "completedDate": "",
            "status": "Open"
        },
        {
            "id": 8, 
            "name": "User 8", 
            "dob": "9/27/1975",
            "type": "Overdue", 
            "city": "Richmond",
            "state": "VA", 
            "zip": "23220",
            "scheduleDate": "1/1/2017",
            "completedDate": "",
            "status": "Open"
        }
    ];
  }

  goToAssessmentDetail(assessment: Assessment) {
    this.navCtrl.push(AssessmentDetailPage, {
      assessment: assessment
    });
  }
}