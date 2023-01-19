import { Component, OnInit  } from '@angular/core';
import { ProjectQuery } from '@trungk18/project/state/project/project.query';
import { JUser } from '@trungk18/interface/user';
import { Observable } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProjectService } from '@trungk18/project/state/project/project.service';

@Component({
  selector: 'utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  username : string = ''
  email : string = ''
  allUser$ : Observable<JUser[]>

  userAdd$ = []

  constructor(private query :  ProjectQuery , private notification : NzNotificationService , private projectService : ProjectService) { }


  breadmenu: string[] = ['Projects', 'Jarvis', 'Espace d\'administration'];

  isVisible = false;


  showModal(): void {
    this.isVisible = true;
  }

  removeUser(user:JUser){
    this.projectService.removeUserToAdded(user)
    this.getAllUserAdd()
    this.notification.create(
      'success',
      'Utilisateur retiré du projet .',
      ''
    );
  }


  getAllUserAdd(){
    this.userAdd$ = []
    this.query.userAdder$.subscribe((data)=>{
      this.query.users$.subscribe((users)=>{
        data.map((item)=>{
        users.map((user)=>{
          if(item == user.id){
            this.userAdd$.push(user)
          }
        })
      })
    })
  })
  }

  handleOk(): void {
    this.query.findUser(this.email).subscribe((data)=>{
      if(data == undefined)
        this.notification.create(
          'error',
          'Aucun utilisateur trouvé, veuillez réessayer .',
          ''
        );
      else{
        if(this.username == data.name){
          this.isVisible = false;
          this.notification.create(
            'success',
            'Utilisateur ajouté avec succès  .',
            ''
          );
          this.projectService.addUser(data)
          this.getAllUserAdd()
          this.email = ''
          this.username = ''
        }
        else
          this.notification.create(
            'error',
            'Aucun utilisateur trouvé, veuillez réessayer .',
            ''
          );
      }
    })

  }

  handleCancel(): void {
    this.isVisible = false;
  }



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
    this.getAllUserAdd()
  }

}
