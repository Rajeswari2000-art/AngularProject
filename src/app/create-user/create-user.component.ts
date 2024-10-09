import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent {

  addUserForm: FormGroup;

  user: User = new User();

  constructor(private userService: UserService, private route: Router, private toastr: ToastrService){
    this.addUserForm = new FormGroup({
      loginId: new FormControl('', Validators.required),
      passwordHash: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    if(this.addUserForm.valid){
      this.insertUser();
      this.toastr.success('User Added Successfully', 'Success');
      console.log(this.user)
    }
  }

  insertUser(){
    this.userService.createUser(this.user).subscribe(data=>{
       this.goToUserList();
       console.log(data);
    })
  }

  goToUserList(){
    this.route.navigate(['/user-list']);
  }

}