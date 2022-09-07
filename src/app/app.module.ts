import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HODModule } from './hod/hod.module';
import { StaffModule } from './staff/staff.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';





@NgModule({ 
  declarations: [
    AppComponent,
  
    
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HODModule,
    StaffModule,
    NgbModule,
    FormsModule,
    AuthModule
  



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
