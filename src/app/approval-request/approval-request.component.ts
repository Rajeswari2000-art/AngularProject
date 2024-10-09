import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-approval-request',
  templateUrl: './approval-request.component.html',
  styleUrl: './approval-request.component.css'
})
export class ApprovalRequestComponent {

  ticketId: number;
  approverId: number;
  responseMessage: string;

  constructor(private ticketService: TicketService) { }

  requestApproval() {
    this.ticketService.requestApproval(this.ticketId, this.approverId).subscribe(
      response => this.responseMessage = `Approval requested: ${response.approvalStatus}`,
      error => this.responseMessage = 'Error requesting approval'
    );
  }
  
}
