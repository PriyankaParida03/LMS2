import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  signupForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern("^[ a-zA-Z][a-zA-Z ]*$") ]),
    username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)],),
    email: new FormControl('', [Validators.email, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    contact: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    department: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
    image: new FormControl(''),
    role: new FormControl('', Validators.required)
  })


  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }
  submitted = false;
  ngOnInit(): void {
    
    
    
    console.log(this.signupForm.controls['username'].errors)

     
  }
  get f() {
    return this.signupForm.controls;
  }

  get name() {
    return this.signupForm.get('name');
  }

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get contact() {
    return this.signupForm.get('contact');
  }

  get department() {
    return this.signupForm.get('department');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get image() {
    return this.signupForm.get('image');
  }

  get role() {
    return this.signupForm.get('role');
  }




// signup method defined

  signUp():void {

    this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res => {
      alert("Registration successful");
      this.submitted= true;
      if (this.signupForm.invalid){
        return; 
      }
      console.log(JSON.stringify(this.signupForm.value, null))
      this.submitted= false;
      this.signupForm.reset();
      this.router.navigate(['login'])


    }, err => {
      alert("server error")
    }

    )
  }

} 