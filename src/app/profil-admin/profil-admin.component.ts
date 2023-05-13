import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-form/services/user.service';
import { User } from '../user-form/models/user-form.model';
import { AdminService } from '../services/admin.service';
import { AnnonceService } from '../services/annonce.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.scss']
})

export class ProfilAdminComponent implements OnInit{

  users: User[] | undefined;

    constructor(private userService: UserService,private adminService : AdminService,private router : Router) {} 

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
    this.users = users;
    });
  }

  findUserBarters(userid:undefined|number){
    this.adminService.setUserId(userid) 
    this.router.navigate(['admin','users',userid,'barters'])
  }

  eraseUser(userid:any) {
    this.userService.deleteUser(userid).subscribe(() => {});
    location.reload();
  } 

  

}
