import { Component, Input, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { JReportingcard } from '@trungk18/interface/design';

@Component({
  selector: 'card-reporting',
  templateUrl: './card-reporting.component.html',
  styles  : [`
    .card-reporting{
      box-shadow : 0px 0px 5px 0px rgba(0,0,0,0.2);
      height : 24vh;
      width : 300px;
      text-align : center;
      margin-left : 3% !important;
      cursor : pointer;
      .card-reporting-body{
         margin-top  : 10% !importants;
         .card-reporting-text{
          margin-top : 10% !important;
          h3 {
            font-size : 30px !important;
          }
         }
      }
    }
  `]
})
export class CardReportingComponent implements OnInit , AfterViewInit {

  @ViewChild('card',{static : false}) card : any;
  @Input() item  : JReportingcard ;

  constructor(private render : Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
     //this.render.setStyle(this.card.nativeElement,'border','1px solid red');
     //this.render.setStyle(this.card.nativeElement,'box-shadow','0px 0px 5px 0px rgba(0,0,0,0.2)');
     this.render.addClass(this.card.nativeElement,'card-reporting')
  }

}
