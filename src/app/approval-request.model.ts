import { Ticket } from "./ticket.model";
import { User } from "./user.model";

export class ApprovalRequest {
    approvalId?: number;
    ticket?: Ticket;
    approver?: User;
    approvalStatus?: string;
    requestedDate?: string;
    decisionDate?: string;
}