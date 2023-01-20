import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "@trungk18/authentification/login/login.component";
import { RegisterComponent } from "@trungk18/authentification/register/register.component";
import { authentificationRoutes } from "@trungk18/authentification/routes/authentification.routes";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from "ng-zorro-antd/spin";

@NgModule( {
  declarations : [LoginComponent, RegisterComponent],
  imports : [
    CommonModule,
    authentificationRoutes ,
    NzFormModule,
    NzButtonModule,
    NzSpinModule,
    FormsModule
  ],
  entryComponents :[],
  exports : [],
})

export class AuthentificationModule {

}
