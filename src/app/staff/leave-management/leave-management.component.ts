import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit {
  leaveDetails!:Array<any>;
  leaveForm!: FormGroup;
  currentUser: any;

  constructor(private staffService: StaffService ,) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("currentuser") || '{}');
    this.getAllApplyLeaveByUser(this.currentUser);
    this.leaveForm = new FormGroup({
      from_date: new FormControl(''),
      to_date: new FormControl(''),
      reason: new FormControl('')
    });

  }

  onSubmitLeave(){
   let data = this.leaveForm.value;
   data.username = this.currentUser.username;
   data.status = "PENDING";
    this.staffService.postLeave(data).subscribe(res=>{
      this.staffService.getLeaves().subscribe(re=>{
        this.leaveDetails = re.filter((data: { username: any; }) => data.username == this.currentUser.username);
        console.log(this.leaveDetails);
      })
    })
  }

  getAllApplyLeaveByUser(currentUser:any){
    this.staffService.getLeaves().subscribe(res=>{
      this.leaveDetails = res.filter((data: { username: any; }) => data.username == currentUser.username);
      console.log(this.leaveDetails);
    }) 
  }

  RevokeLeave(leave:any){
    this.staffService.deletetLeave(leave.id).subscribe(res=>{
      if(res){
        alert("Leave Revoked");
        this.staffService.getLeaves().subscribe(re=>{
          this.leaveDetails = re.filter((data: { username: any; }) => data.username == this.currentUser.username);
          console.log(this.leaveDetails);
        })
      }
    })
  
  }


}
