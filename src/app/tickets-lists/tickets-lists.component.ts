import { Component } from '@angular/core';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tickets-lists',
  templateUrl: './tickets-lists.component.html',
  styleUrl: './tickets-lists.component.css'
})
export class TicketsListsComponent {

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

  viewTicket(id: number){
    this.router.navigate(['view-ticket', id]);
  }

  updateTicket(id: number){
    this.router.navigate(['update-ticket', id]);
  }
}