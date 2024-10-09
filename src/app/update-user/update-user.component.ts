import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  updateUserForm: FormGroup;
  user: User = new User();
  id: number = 0;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService){
    this.updateUserForm = new FormGroup({
      loginId: new FormControl('', Validators.required),
      passwordHash: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(data => {
      this.user = data;
    })
  }

  onSubmit(){
    if(this.updateUserForm.valid){
      this.userService.updateUser(this.id, this.user).subscribe(data => {
        this.user = data;
        this.toastr.success('User Updated Successfully', 'Success');
        this.goToUserList();
      })
    }
  }

  goToUserList(){
    this.router.navigate(['/user-list']);
  }

}