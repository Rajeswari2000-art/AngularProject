import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailNotification } from '../email-notification.model';
import { EmailNotificationService } from '../email-notification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

  addNotificationForm: FormGroup;

  email: EmailNotification = new EmailNotification();

  constructor(private emailService: EmailNotificationService, private toastr: ToastrService){
    this.addNotificationForm = new FormGroup({
      recipientEmail: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    if(this.addNotificationForm.valid){
      this.email.recipientEmail = this.addNotificationForm.value.recipientEmail;
      this.email.subject = this.addNotificationForm.value.subject;
      this.email.body = this.addNotificationForm.value.body;
      this.insertEmail();
      this.toastr.success('Email Sent Successfully', 'Success');
    }
  }

  insertEmail(){
    this.emailService.createNotification(this.email).subscribe(response => {
        this.email=response;
        console.log(this.email);
    })
  }

}