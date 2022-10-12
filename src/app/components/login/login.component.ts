import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  users: any = [];
  constructor(private fb: FormBuilder, private router: Router, private usersSer: UsersService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.usersSer.getData().subscribe((data: any) => {
      this.users = data;
    })

  }


  email: any;
  password: any;
  localemail: any;
  localpass: any;

  loginBtn(data: any) {

    this.email = data.email;
    this.password = data.password;
    this.localemail = localStorage.getItem('email')
    this.localpass = localStorage.getItem('password')
    if (this.email == this.localemail && this.password == this.localpass) {
      localStorage.setItem("isLoggedIn", "true");
      this.router.navigate(['home'])
    } else {
      // localStorage.clear();
      alert('Invalid details')
      this.login.reset();
    }

  }

  goToRegister() {
    this.router.navigate(['register']);
  }

}
