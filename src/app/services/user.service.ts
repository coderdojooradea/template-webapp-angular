import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {
  users = []
  constructor(private http: Http) {}

  sendUserRegistration(registerData){
      this.http.post('http://localhost:8000/register', registerData).subscribe(res => {
    })
  }

  sendUserLogin(loginData){
      this.http.post('http://localhost:8000/login', loginData).subscribe(res => {
        console.log(res.json())
        localStorage.setItem('token', res.json().token)
    })
  }

  getUsers(){
    this.http.get('http://localhost:8000/users').subscribe(res => {
      this.users = res.json()
    })
  }

  getProfile(id){
    return this.http.get('http://localhost:8000/profile/' + id)
  }

}
