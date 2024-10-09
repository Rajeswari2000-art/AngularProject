import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { faChevronDown, faEnvelope, faTicketAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-support-dashboard',
  templateUrl: './support-dashboard.component.html',
  styleUrl: './support-dashboard.component.css'
})
export class SupportDashboardComponent {

  constructor(private router: Router, private userService: UserService){}

  user: User | null = null;

  faUser = faUser;
  ticket = faTicketAlt;
  down = faChevronDown;
  email = faEnvelope;

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
    this.router.navigate(['views-user', id]);
  }

  logout(){
    this.router.navigate(['/login']);
  }

}
