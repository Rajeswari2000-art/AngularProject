import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-views-users',
  templateUrl: './views-users.component.html',
  styleUrl: './views-users.component.css'
})
export class ViewsUsersComponent {

  id: number = 0;
  user: User | null = null;
  constructor(private userService: UserService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(data => {
      this.user = data;
    })
  }

}
