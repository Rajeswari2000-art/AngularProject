import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketUpdates } from '../ticket-updates.model';
import { TicketUpdatesService } from '../ticket-updates.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket-updates',
  templateUrl: './ticket-updates.component.html',
  styleUrl: './ticket-updates.component.css'
})
export class TicketUpdatesComponent {

  addUpdateForm: FormGroup;

  ticketUpdate: TicketUpdates = new TicketUpdates();

  constructor(private ticketUpdateService: TicketUpdatesService, private toastr: ToastrService){
    this.addUpdateForm = new FormGroup({
      ticket: new FormControl('', Validators.required),
      updatedBy: new FormControl('', Validators.required),
      updateType: new FormControl('', Validators.required),
      updateDescription: new FormControl('', Validators.required)
    });
  }

  onSubmit(){
    if(this.addUpdateForm.valid){
      this.ticketUpdate.ticket = { ticketId: this.addUpdateForm.value.ticket };
      this.ticketUpdate.updatedBy = { userId: this.addUpdateForm.value.updatedBy };
      this.ticketUpdate.updateType = this.addUpdateForm.value.updateType;
      this.ticketUpdate.updateDescription = this.addUpdateForm.value.updateDescription;
      this.insertTicket();
      this.toastr.success('Ticket Updated Successfully', 'Success');
      console.log(this.ticketUpdate)
    }
  }

  insertTicket(){
    this.ticketUpdateService.createTicketUpdate(this.ticketUpdate).subscribe(data=>{
        console.log(data);
    })
  }

}