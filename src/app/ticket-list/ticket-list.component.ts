import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {

  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService, private router: Router, private toastr: ToastrService) {}

  ngOnInit():void{
    this.getTickets();
  }

  private getTickets(){
    this.ticketService.getTickets().subscribe(data=>{
      this.tickets=data;
    })
  }

}