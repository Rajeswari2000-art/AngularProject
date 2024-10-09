import { Component } from '@angular/core';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tickets-listss',
  templateUrl: './tickets-listss.component.html',
  styleUrl: './tickets-listss.component.css'
})
export class TicketsListssComponent {

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
