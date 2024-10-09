import { Component } from '@angular/core';
import { ApprovalRequest } from '../approval-request.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-approve-tickets',
  templateUrl: './approve-tickets.component.html',
  styleUrl: './approve-tickets.component.css'
})
export class ApproveTicketsComponent {

  users: ApprovalRequest[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit():void{
    this.getApprovalTickets();
  }

  private getApprovalTickets(){
    this.ticketService.getApprovalTickets().subscribe(data=>{
      this.users=data;
    })
  }

}
