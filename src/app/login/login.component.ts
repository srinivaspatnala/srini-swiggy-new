import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = true;
  loginList !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.loginList = this.formBuilder.group({
      email: [''],
      password: ['']
    })

  }
  login() {
    this.http.get<any>('http://localhost:3000/signUpUsers')
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginList.value.email && a.password === this.loginList.value.password
        });
        if (user) {
          alert('login success');
          this.loginList.reset();
          this.router.navigate(['hotel'])
        } else {
          alert('user not found');

        }

      }, err => {
        alert('something went wrong')
      }
      )
  }




}
