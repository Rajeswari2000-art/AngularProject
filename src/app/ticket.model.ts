import { User } from "./user.model";

export class Ticket {
    ticketId?: number;
    requester?: User;
    title?: string;
    description?: string;
    status?: string;
    priority?: string;
    createdDate?: string;
    updatedDate?: string;
    closedDate?: string;
}