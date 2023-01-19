import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { VerificationService } from '@trungk18/core/services/verification.service';
import { LoginPayload } from '@trungk18/project/auth/loginPayload';
import { AuthService } from '@trungk18/project/auth/auth.service';
import { Router } from '@angular/router';
import { JUser } from '@trungk18/interface/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : [VerificationService,NzNotificationService , AuthService ]
})
export class LoginComponent implements OnInit {

  isFilled  : boolean = false;
  loginForm : LoginPayload = {email : "",password : ""};

  constructor(private _verificationService : VerificationService ,private _notification : NzNotificationService , private _authService : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    const verification = this._verificationService.verifyObj(this.loginForm);
    if(verification.count  > 0) {
      return this.displayErrors(verification.index);
    }
    if(!this._verificationService.verifyIfEmail(this.loginForm.email)){
      return this._notification.create('error','',`veuillez renseigner une addresse email valide`)
    }
    return this.connectUser(this.loginForm);
  }


  connectUser(loginPayload : LoginPayload){
    this.isFilled  = true;
    this._authService.login(loginPayload).subscribe((responce : {user ?: JUser , message :string})=>{
      this.isFilled  = false;
      if(!!responce.user){
        this._notification.create('success','',`Bienvenue  ${responce.user.name}`);
        this.router.navigate(["/project/"]);
      }
      this._notification.create('error','',responce.message);
    });
  }

  displayErrors(errorTable : number[]) {
    for(let index of errorTable) {
      this._notification.create('error','',`veuillez renseigner votre ${Object.keys(this.loginForm)[index]}`)
    }
  }
}
