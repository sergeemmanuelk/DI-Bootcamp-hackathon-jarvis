import { Component, Input, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { JReportingcard } from '@trungk18/interface/design';

@Component({
  selector: 'card-reporting',
  templateUrl: './card-reporting.component.html',
  styles  : [`
    nz-card{
      height : 24vh;
      width : 300px;
      text-align : center;
      margin-left : 1% !important;
      cursor : pointer;
    }
  `]
})
export class CardReportingComponent implements OnInit  {

  @Input() item  : JReportingcard ;

  constructor(private render : Renderer2) { }

  ngOnInit(): void {
  }



}
