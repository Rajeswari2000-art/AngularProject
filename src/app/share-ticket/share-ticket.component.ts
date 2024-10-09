import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketShare } from '../ticket-share.model';
import { TicketSharingService } from '../ticket-sharing.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-share-ticket',
  templateUrl: './share-ticket.component.html',
  styleUrl: './share-ticket.component.css'
})
export class ShareTicketComponent {

  shareTicketForm: FormGroup;

  ticketShare: TicketShare = new TicketShare();

  constructor(private ticketSharingService: TicketSharingService, private route: Router, private toastr: ToastrService){
    this.shareTicketForm = new FormGroup({
      ticketId: new FormControl('', Validators.required),
      sharedWithId: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    if(this.shareTicketForm.valid){
      this.ticketShare.ticketId = this.shareTicketForm.value.ticketId;
      this.ticketShare.sharedWithId = this.shareTicketForm.value.sharedWithId;
      this.insertTicketShare();
      this.toastr.success('Ticket Shared Successfully', 'Success');
      console.log(this.ticketShare)
    }
  }

  insertTicketShare(){
    this.ticketSharingService.createTicketSharing(this.ticketShare).subscribe(data=>{
        console.log(data);
    })
  }

}