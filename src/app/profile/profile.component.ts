    import { Component } from '@angular/core';
    import { User } from '../user.model';
    import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';

    @Component({
      selector: 'app-profile',
      templateUrl: './profile.component.html',
      styleUrl: './profile.component.css'
    })
    export class ProfileComponent {

      user: User | null = null;

      faUser = faUser;

      constructor(private userService: UserService, private router: Router){}

      ngOnInit(): void {
        this.userService.getCurrentUser().subscribe(user => {
          this.user = user;
        });
      }

      manager(){
        this.router.navigate(['/manager-dashboard']);
      }

    }