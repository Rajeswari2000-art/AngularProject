import { Component } from '@angular/core';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrl: './view-ticket.component.css'
})
export class ViewTicketComponent {

  id: number = 0;
  ticket: Ticket = new Ticket();
  constructor(private ticketService: TicketService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.ticketService.getTicket(this.id).subscribe(data => {
      this.ticket = data;
    })
  }

}