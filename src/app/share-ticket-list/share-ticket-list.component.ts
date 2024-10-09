import { Component } from '@angular/core';
import { TicketShare } from '../ticket-share.model';
import { TicketSharingService } from '../ticket-sharing.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-share-ticket-list',
  templateUrl: './share-ticket-list.component.html',
  styleUrl: './share-ticket-list.component.css'
})
export class ShareTicketListComponent {

  shares: TicketShare[] = [];

  constructor(private ticketSharingService: TicketSharingService, private router: Router, private toastr: ToastrService) {}

  ngOnInit():void{
    this.getTickets();
  }

  private getTickets(){
    this.ticketSharingService.getTicketSharings().subscribe(data=>{
      this.shares=data;
    })
  }

}