import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NavbarComponent,
    StaffDashboardComponent,
    LeaveManagementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ]
})
export class StaffModule { }
