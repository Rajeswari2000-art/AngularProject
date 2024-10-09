import { Component } from '@angular/core';
import { User } from '../user.model';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {

  user: User | null = null;

  faUser = faUser;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  manager(){
    this.router.navigate(['/admin-dashboard']);
  }

}