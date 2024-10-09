import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket.model';
import { ApprovalRequest } from './approval-request.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'http://localhost:8080/tickets';

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${id}`);
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, ticket);
  }

  updateTicket(id: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.apiUrl}/${id}`, ticket);
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  reopenTicket(id: number): Observable<Ticket> {
    return this.http.patch<Ticket>(`${this.apiUrl}/${id}/reopen`, {});
  }

  requestApproval(ticketId: number, approverId: number): Observable<ApprovalRequest> {
    return this.http.post<ApprovalRequest>(`${this.apiUrl}/${ticketId}/requestApproval`, null, {
      params: new HttpParams().set('approverId', approverId.toString())
    });
  }

  decideApproval(approvalId: number, approve: boolean): Observable<ApprovalRequest> {
    return this.http.post<ApprovalRequest>(`${this.apiUrl}/${approvalId}/decision`, null, {
      params: new HttpParams().set('approve', approve.toString())
    });
  }

  getApprovalStatus(ticketId: number): Observable<ApprovalRequest> {
    return this.http.get<ApprovalRequest>(`${this.apiUrl}/${ticketId}/approvalStatus`);
  }

  getApprovalTickets(): Observable<ApprovalRequest[]> {
    return this.http.get<ApprovalRequest[]>(`${this.apiUrl}/approvals`);
  }

  getTicketsByLoginId(loginId: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/user/${loginId}`);
  }

}