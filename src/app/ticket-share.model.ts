import { Ticket } from "./ticket.model";
import { User } from "./user.model";

export class TicketShare {
    ticketId?: number;
    sharedWithId?: number;
    sharedDate?: string;
    ticket?: Ticket;
    sharedWith?: User;
}