import { Injectable } from "@angular/core";
import { IssuePriority, IssueStatusDisplay } from "@trungk18/interface/issue";
import { ProjectQuery } from "@trungk18/project/state/project/project.query";
import { from, of } from "rxjs";



@Injectable()

export class ReportingService {

  constructor(private _projectQuery : ProjectQuery){

  }


   getAllReportingForUser = ()  => {

    let done : number     = 0;
    let pending : number  = 0;
    let hight : number    = 0 ;

    this._projectQuery.all$.subscribe((project) => {

      project.issues.forEach((issue) => {

        if (issue.status == IssueStatusDisplay.Done) {
          done = done + 1;
        }
        if (issue.status == IssueStatusDisplay.InProgress) {
          pending = pending + 1;
        }
        if (issue.priority == IssuePriority.HIGH) {
          hight = hight + 1;
        }

      });

    })

    return [done , pending , hight]




  }

}
