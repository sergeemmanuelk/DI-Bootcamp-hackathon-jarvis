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
  picture : string = ''
  project_name : string = ''
  allUser$ : JUser[] = []

  userAdd$ = []

  constructor(private query :  ProjectQuery , private notification : NzNotificationService , private projectService : ProjectService) { }


  breadmenu: string[] = ['Projects', 'Jarvis', 'Espace d\'administration'];

  isVisible = false;


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {

    const user : any = {id : "5678-6789-6789-45678-45678" , name : this.username , avatarUrl : this.picture , projectId : this.project_name}
    //this.projectService.addUser(user)

    this.allUser$.push({...user})

    // this.query.findUser(this.email).subscribe((data)=>{
    //   if(data == undefined)
    //     this.notification.create(
    //       'error',
    //       'Aucun utilisateur trouvé, veuillez réessayer .',
    //       ''
    //     );
    //   else{
    //     if(this.username == data.name){
    //       this.isVisible = false;
    //       this.notification.create('success','Utilisateur ajouté avec succès  .','');
    //       this.projectService.addUser(data)
    //       this.query.userAdder$.subscribe((data)=>{
    //       this.query.users$.subscribe((users)=>{
    //         data.map((item)=>{
    //           console.log(item)
    //         users.map((user)=>{
    //           if(item == user.id){
    //             this.userAdd$ = []
    //             this.userAdd$.push(user)
    //           }
    //         })
    //       })
    //     })
    //   })
    //     }
    //     else
    //       this.notification.create(
    //         'error',
    //         'Aucun utilisateur trouvé, veuillez réessayer .',
    //         ''
    //       );
    //   }
    // })

  }

  handleCancel(): void {
    this.isVisible = false;
  }

  /*addNewUser() {
    this.allUser$.subscribe((users)=>{
      const $users = users;
      $users.push({email : this.email , })
    })
  }*/

  ngOnInit(): void {
    this.query.users$.subscribe((data : JUser[])=>{
      this.allUser$ = data
    })
  }

}
