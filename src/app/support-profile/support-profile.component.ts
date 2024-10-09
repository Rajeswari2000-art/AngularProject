import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-support-profile',
  templateUrl: './support-profile.component.html',
  styleUrl: './support-profile.component.css'
})
export class SupportProfileComponent {

  user: User | null = null;

  faUser = faUser;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
     });
  }

  manager(){
    this.router.navigate(['/support-dashboard']);
  }

}