import { JReportingcard } from './../../../interface/design';
import { Component, OnInit } from '@angular/core';
import { ProjectConst } from '@trungk18/project/config/const';

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

  constructor() { }

  ngOnInit(): void {
  }

}
