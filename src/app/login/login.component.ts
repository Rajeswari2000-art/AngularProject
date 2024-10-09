import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginId: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService.login(this.loginId, this.password).subscribe({
      next: (user: User) => {
        this.userService.setCurrentUser(user);
        console.log('User role:', user.role); // Debugging line
        if (user.role === 'MANAGER') {
          this.router.navigate(['/profile']);
        } else if (user.role === 'ADMIN') {
          this.router.navigate(['/admin-profile']);
        } else if (user.role === 'IT_SUPPORT') {
          this.router.navigate(['/support-profile']);
        } else if (user.role === 'PROJECT_MEMBER') {
          this.router.navigate(['/member-profile']);
        }else {
          this.errorMessage = 'Unknown role';
        }
      },
      error: (err) => {
        this.errorMessage = 'Invalid login credentials';
      }
    });
  }

}