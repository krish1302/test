import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirstService } from 'src/app/services/first/first.service';
import { PasswordService } from 'src/app/services/password/password.service';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private firstService: FirstService, private passwordService: PasswordService){
    
  }

  name = "arun"

  response : any;
  password_error : any;

  userForm = this.formBuilder.group({
    email: [''],
    password: ['']
  })


  email_validation(){
    var email = this.userForm.get('email')?.value
    if (email == ''){
      return false
    }
    return email?.endsWith("@gmail.com")
  }

  password_valiation(){
    var password = this.userForm.get('password')?.value
    var password_hint = this.passwordService.password_valiation(password)
    this.password_error = password_hint.msg
    return password_hint?.cond
  }

  login(){
    var email = this.userForm.get('email')?.value
    var password = this.userForm.get('password')?.value

    var request_json = {
      "email": email,
      "pass": password
    }


    // this.httpClient.get('http://localhost:7000/'+email+'/'+password, {responseType: 'json'}).subscribe( val => {
    //   this.response = val
    // })

    // this.httpClient.post('http://localhost:7000/post', request_json, {responseType: 'json'}).subscribe(val => {
    //   this.response = val
    // })

    this.firstService.get(email, password).subscribe(val => {
      this.response = val
    })    
    
  }




}
