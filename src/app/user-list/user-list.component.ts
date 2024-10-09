import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) {}

  ngOnInit():void{
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
    })
  }

  updateUser(id: number){
    this.router.navigate(['update-user', id]);
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(data => {
     this.toastr.success('Employee Deleted Successfully', 'Success');
     console.log(data);
     this.getUsers();
    })
  }

}