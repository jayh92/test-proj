import { Component } from '@angular/core';

@Component({
  selector: 'util-pie-chart',
  templateUrl: 'build/pages/home/home.html',
})
export class PieChart {
  // Pie
//   public pieChartLabels:string[] = ['In Assessments', 'Travel', 'Available'];
//   public pieChartData:number[] = [10, 3, 1];
//   public pieChartType:string = 'pie';

  public pieChartLabels:string[];
  public pieChartData:number[];
  public pieChartType:string;

  // events
//   public chartClicked(e:any):void {
//     console.log(e);
//   }

//   public chartHovered(e:any):void {
//     console.log(e);
//   }
}