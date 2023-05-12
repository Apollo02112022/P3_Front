import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  private userid!:undefined | number

  getUserId():number|undefined {
    return this.userid
  }
  setUserId(userid:undefined|number):void {
    this.userid = userid
  }

}
