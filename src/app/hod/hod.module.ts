import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LmsComponent } from './lms/lms.component';
import { SmsComponent } from './sms/sms.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import{NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DashboardComponent,
    LmsComponent,
    SmsComponent,
    SidenavbarComponent
  

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    FormsModule
    


    
  ]
})
export class HODModule { 

  

}
