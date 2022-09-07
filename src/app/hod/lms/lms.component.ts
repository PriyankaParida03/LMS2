import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/staff/staff.service';

@Component({
  selector: 'app-lms',
  templateUrl: './lms.component.html',
  styleUrls: ['./lms.component.css']
})
export class LmsComponent implements OnInit {
  leaveDetails!:Array<any>

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.getAllLeaves();
  }

  getAllLeaves(){
    this.staffService.getLeaves().subscribe(res=>{
      this.leaveDetails = res;
      console.log(this.leaveDetails);
    })
  }

  approveLeave(leave:any){
    leave.status="APPROVED";
    this.staffService.approveRejectLeaves(leave.id,leave).subscribe(res=>{
      if(res){
        alert("Leave Approved");
        this.getAllLeaves();
      }
    })
  }

  RejectLeave(leave:any){
    leave.status="REJECTED";
    this.staffService.approveRejectLeaves(leave.id,leave).subscribe(res=>{
      if(res){
        alert("Leave Rejected");
        this.getAllLeaves();
      }
    })
  }

}
