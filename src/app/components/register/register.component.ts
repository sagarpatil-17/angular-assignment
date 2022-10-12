import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: any = FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-z ]*$')]],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      contact: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      flexRadioDefault: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  email: any;
  password: any;
  registerBtn(data: any) {
    console.log(data)
    this.email = data.email
    this.password = data.password
    localStorage.setItem('email', this.email)
    localStorage.setItem('password', this.password)
    this.register.reset()
    alert('Register Successful')
    this.router.navigate(['login'])
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

}
