import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronDown, faTicketAlt, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  user: User | null = null;

  constructor(private userService: UserService, private router: Router){}

  faUserCircle = faUserCircle;
  ticket = faTicketAlt;
  down = faChevronDown;
  faUser = faUser;

  isDropdownOpen = false;

  toggleDropdown(event: Event) {
    event.preventDefault(); 
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  viewUser(id: number){
    this.router.navigate(['view-admin', id]);
  }

  logout(){
    this.router.navigate(['/login']);
  }

}