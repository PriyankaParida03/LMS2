import { HttpClient } from '@angular/common/http';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private userService: UserService) { }
   submitted= false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',  Validators.email],
      password: ['', Validators.required]
    })
  }

  get f() {
    return this.loginForm.controls;
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

// login method defined

  login() {
     this._http.get<any>("http://localhost:3000/signup").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        localStorage.setItem("currentuser",JSON.stringify(user));
        alert("login successful");
        this.loginForm.reset();

        if (user.role == 'HOD') {
          this.router.navigate (['sidenavbar'])
        }
        else if (user.role == 'staff') {
          this.router.navigate(['navbar'])
        }
      }else{
        alert('User not found')
      }
     
    }, err => {
      alert("server error")
    }
    )
  }
  
  }
