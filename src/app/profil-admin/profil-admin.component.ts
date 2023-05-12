import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-form/services/user.service';
import { User } from '../user-form/models/user-form.model';


@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.scss']
})

export class ProfilAdminComponent implements OnInit{

  users: User[] | undefined;

  constructor(private userService: UserService) {} 

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  eraseUser(userid:any) {
    this.userService.deleteUser(userid).subscribe(() => {});
    location.reload();
  } 

  

}
