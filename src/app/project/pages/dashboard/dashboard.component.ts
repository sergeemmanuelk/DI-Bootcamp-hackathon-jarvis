<<<<<<< HEAD
import { JIssue, IssueStatusDisplay, IssuePriority } from './../../../interface/issue';
=======
import { JIssue } from './../../../interface/issue';
>>>>>>> 112f4ee (feat : ajout du tableau des activités recentes sur le dashboard)
import { JReportingcard } from './../../../interface/design';
import { Component, OnInit } from '@angular/core';
import { ProjectQuery } from '@trungk18/project/state/project/project.query';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  breadcrumbs: string[] = ['Projects', 'Jarvis', 'Tableau de board'];
  report  : {done;pending;hight} = {
    done : 0,
    pending : 0,
    hight : 0
  }
  cards      : JReportingcard [] = [
    {
      title : 0,
      description : 'projets  terminé'
    },
    {
      title : 0,
      description : 'projet en cours'
    },
    {
      title : 0,
      description : 'taches urgentes'
    }
  ]
  recentActivities!: JIssue[];

<<<<<<< HEAD
  constructor(private _projectQuery : ProjectQuery ) { }

  ngOnInit(): void {
    this._projectQuery.all$.subscribe((project) => {

      this.recentActivities = project.issues.slice(0,5).filter((issue)=>{
        return issue.priority == IssuePriority.HIGHEST
      });

      project.issues.forEach((issue) => {

        if (issue.status === IssueStatusDisplay.Done) {
          this.report.done = this.report.done + 1;
        }
         if (issue.status === IssueStatusDisplay.InProgress)
        {
          this.report.pending = this.report.pending + 1 ;
        }

        if (issue.priority === IssuePriority.HIGHEST) {
          this.report.hight  = this.report.hight + 1;
        }

      });

      this.cards[0].title = this.report.done;
      this.cards[1].title = this.report.pending;
      this.cards[2].title = this.report.hight;
    });




=======
  constructor(private _projectQuery : ProjectQuery) { }

  ngOnInit(): void {
    this._projectQuery.all$.subscribe((project) => {
      console.log(project.issues[0]);
      this.recentActivities = project.issues.slice(0,5);
    });
>>>>>>> 112f4ee (feat : ajout du tableau des activités recentes sur le dashboard)
  }

}
