import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


const routes  : Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path: '',
    pathMatch :'full',
    redirectTo : 'login'
  },
  {
    path:'**',
    redirectTo : 'login'
  }
]


@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class authentificationRoutes {}
