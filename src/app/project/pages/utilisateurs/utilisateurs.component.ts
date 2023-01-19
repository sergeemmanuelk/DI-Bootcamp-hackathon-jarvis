import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  constructor() { }

  breadmenu: string[] = ['Projects', 'Jarvis', 'Espace d\'administration'];



  users = [
    {
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },{
      'username' : 'Mister Jhon' ,
      'avatar' : 'https://images.unsplash.com/photo-1573495627361-d9b87960b12d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' ,
      'project_name' : '@Dev App mobile',
      'status' : true
    },
  ]

  ngOnInit(): void {
  }

}
