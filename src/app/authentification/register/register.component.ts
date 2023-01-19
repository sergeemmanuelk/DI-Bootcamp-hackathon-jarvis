import { Component, OnInit }     from '@angular/core';
import { Router } from '@angular/router';
import { VerificationService }   from '@trungk18/core/services/verification.service';
import { AuthService } from '@trungk18/project/auth/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers : [VerificationService,NzNotificationService ]
})
export class RegisterComponent implements OnInit {

  registerForm = {
    firstname  : "",
    lastname   : "",
    email      : "",
    password   : ""

  }

  constructor(private _verificationService : VerificationService ,private _notification : NzNotificationService, private _authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  register(){

    const verification = this._verificationService.verifyObj(this.registerForm);

    if(verification.count  > 0)
    {
      return this.displayErrors(verification.index);
    }
    if(!this._verificationService.verifyIfEmail(this.registerForm.email))
    {
      this._notification.create('error','',`veuillez renseigner une addresse email valide`);
    }
    else if(!this._verificationService.verifyFieldLength(this.registerForm.password,8)){
      this._notification.create('error','',`Votre mot de passe doit contenir au moins 8 caracteres`);
    }else
    {
      this._authService.register(this.registerForm).subscribe((responce)=>{
        this._notification.create('sucess','',`Votre compte a été crée avec succes`);
        this.router.navigate(["/auth/login"]);
      });
    }
  }


  createNewUser(){

  }

  displayErrors(errorTable : number[]) {
    for(let index of errorTable) {
      this._notification.create('error','',`veuillez renseigner votre ${Object.keys(this.registerForm)[index]}`)
    }
  }

}
