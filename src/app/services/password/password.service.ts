import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  password_hint = {
    cond: false,
    msg: ""
  }

  password_valiation(password: any){
    if(!password){
      this.password_hint.msg = "password is required"
      return this.password_hint
    }
    else if((password.length < 8)){
      this.password_hint.msg = "password must be 8 length required"
      return this.password_hint
    }
    this.password_hint.cond = true
    this.password_hint.msg = ""
    return this.password_hint
  }
}
