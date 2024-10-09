import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-approval-status',
  templateUrl: './approval-status.component.html',
  styleUrl: './approval-status.component.css'
})
export class ApprovalStatusComponent {

  approvalId: number;
  approve: boolean;
  responseMessage: string;

  constructor(private ticketService: TicketService) { }

  decideApproval() {
    this.ticketService.decideApproval(this.approvalId, this.approve).subscribe(
      response => this.responseMessage = `Approval status updated : ${response.approvalStatus}`,
      error => this.responseMessage = 'Error deciding approval'
    );
  }
  
}