import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private oneUser: UsersService) { }

  ngOnInit(): void {
    this.getUserData()
  }

  user_db: any;
  getUserData() {
    this.oneUser.getUser().subscribe(
      (dt) => { this.user_db = dt }

    )
  }

  logoutBtn() {
    localStorage.setItem("isLoggedIn", "false");
  }


}
