import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrl: './update-ticket.component.css'
})
export class UpdateTicketComponent {

  updateTicketForm: FormGroup;
  ticket: Ticket = new Ticket();
  id: number = 0;

  constructor(private ticketService: TicketService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService){
    this.updateTicketForm = new FormGroup({
      requester: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.ticketService.getTicket(this.id).subscribe(data => {
      this.ticket = data;
    })
  }

  onSubmit(){
    if(this.updateTicketForm.valid){
      this.ticket.requester = { userId: this.updateTicketForm.value.requester };
      this.ticket.title = this.updateTicketForm.value.title;
      this.ticket.description = this.updateTicketForm.value.description;
      this.ticket.status = this.updateTicketForm.value.status;
      this.ticket.priority = this.updateTicketForm.value.priority;
      this.ticketService.updateTicket(this.id, this.ticket).subscribe(data => {
        this.ticket = data;
        this.toastr.success('Ticket Updated Successfully', 'Success');
        this.goToTicketList();
      })
    }
  }

  goToTicketList(){
    this.router.navigate(['/tickets-lists']);
  }

}
