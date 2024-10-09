import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrl: './member-profile.component.css'
})
export class MemberProfileComponent {

  user: User | null = null;

  faUser = faUser;

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  manager(){
    this.router.navigate(['/member-dashboard']);
  }

}