import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { VerificationService } from '@trungk18/core/services/verification.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : [VerificationService ]
})
export class LoginComponent implements OnInit {




  loginForm = {
    username : "",
    password : ""
  }
  tmpElement = Object.keys(this.loginForm);

  constructor(private _verificationService : VerificationService , private render : Renderer2) { }

  ngOnInit(): void {
  }

  Login(){
    const verification = this._verificationService.verifyObj(this.loginForm);
    this.displayErrors(verification.index)
  }


  displayErrors(errorTable : number[]) {

    let documentsElements : HTMLElement[] = [] ;


    for(let index of errorTable) {
      const doc = document.getElementById(Object.keys(this.loginForm)[index]);
      documentsElements.push(doc);
    }

    for(let document  of documentsElements) {
      this.render.setStyle(document as any , 'border','1px solid red');
    }

    if(documentsElements.length == 0) {
      for(let tmp  of this.tmpElement) {
        const doc = document.getElementById(Object.keys(this.tmpElement)[tmp]);
        documentsElements.push(doc);
      }

      for(let document  of this.tmpElement) {
        this.render.setStyle(document as any , 'border','1px solid white');
      }
    }


  }
}
