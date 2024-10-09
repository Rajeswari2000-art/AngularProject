import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrl: './view-admin.component.css'
})
export class ViewAdminComponent {

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
