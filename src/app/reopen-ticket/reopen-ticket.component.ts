import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-reopen-ticket',
  templateUrl: './reopen-ticket.component.html',
  styleUrl: './reopen-ticket.component.css'
})
export class ReopenTicketComponent {

  ticket: Ticket = new Ticket();

  reopenTicketForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private ticketService: TicketService) {
    this.reopenTicketForm = new FormGroup({
      ticketId: new FormControl('', Validators.required)
    });
  }

  reopenTicket() {
    if (this.reopenTicketForm.invalid) {
      this.errorMessage = 'Please provide a valid Ticket ID';
      return;
    }

    const ticketId = this.reopenTicketForm.value.ticketId;

    this.ticketService.reopenTicket(ticketId).subscribe(
      (ticket: Ticket) => {
        this.successMessage = `Ticket reopened successfully!`;
      },
      (error) => {
        this.errorMessage = `Failed to reopen ticket!`;
      }
    );
  }

}
