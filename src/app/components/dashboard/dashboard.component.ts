import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.getUsersData()
  }

  users_db: any;
  getUsersData() {
    this.users.getData().subscribe(
      (dt) => { this.users_db = dt }

    )
  }

}
