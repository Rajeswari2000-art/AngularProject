import { Ticket } from "./ticket.model";
import { User } from "./user.model";

export class TicketUpdates {
    updateId?: number;
    ticket?: Ticket;
    updatedBy?: User;
    updateType?: string;
    updateDescription?: string;
    updateDate?: string;
}