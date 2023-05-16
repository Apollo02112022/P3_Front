import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private router : Router) { }
  
  private userid!:undefined | number
  
  getUserId():number|undefined {
    this.userid = this.userid
    return this.userid
  }
  setUserId(userid:undefined|number):void {
    this.userid = userid
  }
  
  deleteAnnonce(annonceid: number) {
    const url = "http://localhost:8080/users/"+this.getUserId()+"/barters/"+annonceid;
    const token = localStorage.getItem("token");
    const options = {
      method: 'DELETE',
      headers: new Headers({
        'Authorization': `Bearer ${token}`
      }),
    }      
    fetch(url, options)
    .then(response => {
      console.log(response)
      this.router.navigate(['admin','users'])
    })
    .catch(err => {
      console.log('test',err)
    });
  }
}
