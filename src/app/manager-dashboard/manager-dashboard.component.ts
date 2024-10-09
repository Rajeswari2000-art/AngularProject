import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronDown, faEnvelope, faTicketAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent {

  user: User | null = null;

  constructor(private router: Router, private userService: UserService){}

  ticket = faTicketAlt;
  faUser = faUser;
  email = faEnvelope;
  down = faChevronDown;

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
    this.router.navigate(['views-users', id]);
  }


  logout(){
    this.router.navigate(['/login']);
  }

}