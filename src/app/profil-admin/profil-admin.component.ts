import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-form/services/user.service';
import { User } from '../user-form/models/user-form.model';
import { AdminService } from '../services/admin.service';
import { AnnonceService } from '../services/annonce.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';


@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.scss']
})

export class ProfilAdminComponent implements OnInit{

  users: any | undefined;

    constructor(private userService: UserService,private adminService : AdminService,private router : Router,private token : TokenService) {} 

  ngOnInit() {
    if(this.router.url.includes("admin")){

      console.log(this.token.adminToken())
    }
    this.userService.getAllUsers().subscribe(users => {
    this.users = users;
    });
  }

  findUserBarters(userid:undefined|number){
    this.router.navigate(['admin','users',userid,'barters'])
    this.adminService.setUserId(userid) 
  }

  eraseUser(userid:any) {
    this.userService.deleteUser(userid).subscribe(() => {});
    location.reload();
  } 

  

}
