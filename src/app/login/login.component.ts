import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = {}
  constructor(private uerService: UserService) { }

  ngOnInit() {
  }

  login(){
    this.uerService.sendUserRegistration(this.loginData)
  }

}
