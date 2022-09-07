import {  NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './hod/dashboard/dashboard.component';
import { LmsComponent } from './hod/lms/lms.component';
import { SidenavbarComponent } from './hod/sidenavbar/sidenavbar.component';
import { SmsComponent } from './hod/sms/sms.component';
import { LoginComponent } from './auth/login/login.component';
import { RoleGuardService } from './role-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { LeaveManagementComponent } from './staff/leave-management/leave-management.component';
import { NavbarComponent } from './staff/navbar/navbar.component';
import { StaffDashboardComponent } from './staff/staff-dashboard/staff-dashboard.component';



const routes: Routes = [
  
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component:SignupComponent},

  {path: 'dashboard', component: DashboardComponent,  canActivate: [AuthGuardService, RoleGuardService]},
  {path: 'sidenavbar', component: SidenavbarComponent, canActivate: [AuthGuardService, RoleGuardService]},
  {path: 'ims', component: LmsComponent, canActivate: [AuthGuardService, RoleGuardService]},
  {path: 'sms', component:SmsComponent, canActivate: [AuthGuardService, RoleGuardService]},
  {path: 'navbar', component: NavbarComponent,  canActivate: [AuthGuardService]},
  {path:'staff-dashboard', component: StaffDashboardComponent,  canActivate: [AuthGuardService]},
  {path:'leave-management', component: LeaveManagementComponent,  canActivate: [AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
