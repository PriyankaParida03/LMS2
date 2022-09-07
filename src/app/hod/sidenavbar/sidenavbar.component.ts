import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
 currentUser= {}
  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.userService.currentUser;
    console.log(this.currentUser);
  }

  logout(){
     localStorage.removeItem ("currentUser")
     localStorage.clear();
     this.router.navigate(['login'])
  }
}
