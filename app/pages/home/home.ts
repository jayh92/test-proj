import { Component } from '@angular/core';
import { ModalController, Modal, NavController } from 'ionic-angular';
import { AssessmentsCompletedModal } from '../modals/assessments-completed-modal';
import { PieChart } from './piechart'
import {ChartComponent, Chart} from 'ng2-chartjs2';
import '../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Visit } from '../../models/visit';
import { ScheduleModal } from '../modals/schedule-modal';
// import { ChartRenderer } from '../../services/chart-renderer';

@Component({
  templateUrl: 'build/pages/home/home.html'//,
  // directives: [ ChartRenderer ]
})
export class HomePage {
  todayVisits: any;
  collapseLabel: string = 'Show More';
  collapseCount:number = 0;
  
  // Chart info
  public pieChartType:string = 'pie';

  // Pie
  public doughnutChartLabels:string[] = ['In Assessments', 'Travel', 'Available'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }
  popAssessmentsCompletedModal() {
      // open modal with deep link message
      let memberModal = this.modalCtrl.create(AssessmentsCompletedModal, {});
      memberModal.present();
  }
  linkToSchedule(visit: Visit) {
      let scheduleModal = this.modalCtrl.create(ScheduleModal, {});
      scheduleModal.present();
  }
  updateCollapseLabel() {
    this.collapseCount++;
    this.collapseLabel = this.collapseCount %2 == 0 ? 'Show More' : 'Show Less';
  }
  constructor(public navCtrl: NavController,  public modalCtrl: ModalController) {
    this.navCtrl = navCtrl;
    this.todayVisits = [
      {
        "id": 1,
        "memberFirstName": "Jane",
        "memberLastName": "Doe",
        "memberPhone": "804-332-1234",
        "npFirstName": "Joe",
        "npLastName": "Hamilton",
        "facility": "MCV",
        "memberStatus": "Waiting",
        "healthStatus": "Test",
        "distance": "5 miles",
        "estimatedTime": "9 min"
      },
      {
        "id": 2,
        "memberFirstName": "Abby",
        "memberLastName": "Douglas",
        "memberPhone": "804-342-9297",
        "npFirstName": "Joe",
        "npLastName": "Hamilton",
        "facility": "MCV",
        "memberStatus": "Waiting",
        "healthStatus": "Test",
        "distance": "31 miles",
        "estimatedTime": "37 min"
      },
      {
        "id": 3,
        "memberFirstName": "George",
        "memberLastName": "LaSalle",
        "memberPhone": "804-234-4434",
        "npFirstName": "Joe",
        "npLastName": "Hamilton",
        "facility": "MCV",
        "memberStatus": "Waiting",
        "healthStatus": "Test",
        "distance": "60 miles",
        "estimatedTime": "1 hr"
      },
      {
        "id": 5,
        "memberFirstName": "Ogden",
        "memberLastName": "Morrow",
        "memberPhone": "804-234-2344",
        "npFirstName": "Joe",
        "npLastName": "Hamilton",
        "facility": "MCV",
        "memberStatus": "Waiting",
        "healthStatus": "Test",
        "distance": "10 miles",
        "estimatedTime": "2 hr"
      }
    ];
  }
}
