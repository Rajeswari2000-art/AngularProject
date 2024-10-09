import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrl: './raise-ticket.component.css'
})
export class RaiseTicketComponent {

  addTicketForm: FormGroup;

  ticket: Ticket = new Ticket();

  constructor(private ticketService: TicketService, private route: Router, private toastr: ToastrService){
    this.addTicketForm = new FormGroup({
      requester: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    if(this.addTicketForm.valid){
      this.ticket.requester = { userId: this.addTicketForm.value.requester };
      this.ticket.title = this.addTicketForm.value.title;
      this.ticket.description = this.addTicketForm.value.description;
      this.ticket.status = this.addTicketForm.value.status;
      this.ticket.priority = this.addTicketForm.value.priority;
      this.insertTicket();
      this.toastr.success('Ticket Raised Successfully', 'Success');
      console.log(this.ticket)
    }
  }

  insertTicket(){
    this.ticketService.createTicket(this.ticket).subscribe(data=>{
        console.log(data);
    })
  }

}