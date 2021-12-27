import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpList !: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit() {

    this.signUpList = this.formBuilder.group({
      fullName : [''],
      location : [''],
      email: [''],
      password : ['']
    })

    
  }

  signUp(){
      this.http.post<any>('http://localhost:3000/signUpUsers', this.signUpList.value)
      .subscribe( res => {
        console.log(res);
        alert('signup details added');
        this.signUpList.reset();
        this.router.navigate(['/signin']);
      }, err => {
        alert('there is an error');
      }        
      )
  }

}
