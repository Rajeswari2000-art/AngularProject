import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronDown, faTicketAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-member-dashboard',
  templateUrl: './member-dashboard.component.html',
  styleUrl: './member-dashboard.component.css'
})
export class MemberDashboardComponent {

  constructor(private router: Router, private userService: UserService){}

  user: User | null = null;

  faUser = faUser;
  ticket = faTicketAlt;
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
    this.router.navigate(['view-user', id]);
  }

  logout(){
    this.router.navigate(['/login']);
  }

}
