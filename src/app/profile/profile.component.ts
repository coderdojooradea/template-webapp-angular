import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile = {}

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.params.id
    this.userService.getProfile(id).subscribe(data => {
      this.profile = data.json()
    })
  }

}
