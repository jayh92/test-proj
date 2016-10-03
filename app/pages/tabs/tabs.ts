import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SchedulePage } from '../schedule/schedule';
import { TasksPage } from '../tasks/tasks';
import { AssessmentsPage } from '../assessments/assessments';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public tab4Root: any;

  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = SchedulePage;
    this.tab3Root = AssessmentsPage;
    this.tab4Root = TasksPage;
  }
}