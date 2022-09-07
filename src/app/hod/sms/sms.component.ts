
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder,FormControl,FormGroup ,Validators,  } from '@angular/forms';
import { ApiService } from '../api.service';
import { smsModel } from './sms.model';


@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit, OnDestroy{

smsmodel:smsModel[]= []
smsmodelobj : smsModel= new smsModel ();
staffData!:any
showAdd! :boolean;
showUpdate!: boolean;
fullName!:any;
p:number = 1;
search!:any




formvalue : FormGroup = new FormGroup({
  fullname: new FormControl('',[Validators.required,      ]),
  username: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")] ),
    email: new FormControl('', [Validators.email, Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    contact: new FormControl(''),
})
submitted= false;
  constructor( private FormBuilder: FormBuilder , private api: ApiService ) { }

  ngOnInit(): void {
    console.log(this.formvalue.controls['username'].errors)

    // this.formvalue= this.FormBuilder.group({
    //   fullname: ['', Validators.required],
    //   username:['', Validators.required],
    //   email:['', Validators.required, ],
    //   contact:['', Validators.required]
    // })
    this.getAllstaff();
    this.api.getStaff(this.fullName).subscribe(
      (Response)=> {
        this.smsmodel= Response;
      }
    )
    
    
  
  }

  get f() {
    return this.formvalue.controls;
  }

  get fullname() {
    return this.formvalue.get('fullname');
  }

  get username() {
    return this.formvalue.get('username');
  }

  get email() {
    return this.formvalue.get('email');
  }

  get contact() {
    return this.formvalue.get('contact');
  }
  


 clickAddEmploy(){
  this.formvalue.reset();
  this.showAdd= true;
  this.showUpdate = false;
  
 }
  poststaffDetails(){
    this.smsmodelobj.fullname= this.formvalue.value.fullname;
    this.smsmodelobj.username= this.formvalue.value.username;
    this.smsmodelobj.email= this.formvalue.value.email;
    this.smsmodelobj.mobile= this.formvalue.value.contact;

    
this.api. postStaff(this.smsmodelobj)   
.subscribe(res=>{
    console.log(res);
    alert("added successfully")

    let ref = document.getElementById('cancel')
     ref?.click();
    
    this.formvalue.reset();
    this.getAllstaff();
  }
  )
  this.submitted = true;
  if (this.formvalue.invalid) {
    return;
  }
  console.log(JSON.stringify(this.formvalue.value, null, 2));
  }
  getAllstaff(){
    this.api.getStaff(this.staffData)
    .subscribe(res=>{
      this.staffData= res;
    })
  }
deleteStaff(id: any){
  this.api.deletetStaff(id).subscribe(res=>{
    alert("Staff Deleted");
    this.getAllstaff();
    
    }

    )
  
}
onEdit(row:any){ 
  this.showAdd= false;
  this.showUpdate = true;
  this.smsmodelobj = row
this.formvalue.controls['fullname'].setValue(row.fullname);
this.formvalue.controls['email'].setValue(row.email);
this.formvalue.controls['username'].setValue(row.username);
this.formvalue.controls['contact'].setValue(row.mobile);
}

updateStaffDetails(){
  this.smsmodelobj.fullname= this.formvalue.value.fullname;
    this.smsmodelobj.username= this.formvalue.value.username;
    this.smsmodelobj.email= this.formvalue.value.email;
    this.smsmodelobj.mobile= this.formvalue.value.contact;

this.api.updatetStaff(this.smsmodelobj,this.smsmodelobj.id)
.subscribe (res=>{
  alert("updated")
  let ref = document.getElementById('cancel')
  ref?.click();
 
 this.formvalue.reset();
 this.getAllstaff();
})   
}


key = 'id';
reverse: boolean= false
sort(key: any){
  this.key = key;
  this.reverse = !this.reverse

}
ngOnDestroy(): void {
  
}
}


