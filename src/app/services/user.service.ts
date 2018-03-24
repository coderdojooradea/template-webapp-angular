import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  sendUserRegistration(registerData){
      this.http.post('http://localhost:8000/register', registerData).subscribe(res => {
    })
  }

  sendUserLogin(loginData){
      this.http.post('http://localhost:8000/login', loginData).subscribe(res => {
        localStorage.setItem('token', res.json().token)
    })
  }

}
