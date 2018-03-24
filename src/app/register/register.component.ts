import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerData = {}
  constructor(private uerService: UserService) { }

  ngOnInit() {
  }

  register(){
    this.uerService.sendUserRegistration(this.registerData)
  }

}
