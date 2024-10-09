  import { Component, OnInit } from '@angular/core';
  import { Ticket } from '../ticket.model';
  import { TicketService } from '../ticket.service';
  import { ToastrService } from 'ngx-toastr';
  import { Router } from '@angular/router';
  import { User } from '../user.model';
  import { UserService } from '../user.service';

  @Component({
    selector: 'app-tickets-list',
    templateUrl: './tickets-list.component.html',
    styleUrl: './tickets-list.component.css'
  })
  export class TicketsListComponent implements OnInit{
    
    tickets: Ticket[] = [];
    loginId: string = '';

    constructor(private ticketService: TicketService, private userService: UserService, private router: Router, private toastr: ToastrService) {}

    ngOnInit():void{
      this.getTickets();
    }
  
    private getTickets(){
      this.ticketService.getTickets().subscribe(data=>{
        this.tickets=data;
      })
    }  

}