import { JIssue } from './../../../interface/issue';
import { JReportingcard } from './../../../interface/design';
import { Component, OnInit } from '@angular/core';
import { ProjectQuery } from '@trungk18/project/state/project/project.query';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  breadcrumbs: string[] = ['Projects', 'Jarvis', 'Tableau de board'];
  cards      : JReportingcard [] = [
    {
      title : '10',
      description : 'project en pending'
    },
    {
      title : '10',
      description : 'probleme en pending'
    },
    {
      title : '10',
      description : 'task urgentes'
    }
  ]
  recentActivities!: JIssue[];

  constructor(private _projectQuery : ProjectQuery) { }

  ngOnInit(): void {
    this._projectQuery.all$.subscribe((project) => {
      console.log(project.issues[0]);
      this.recentActivities = project.issues.slice(0,5);
    });
  }

}
