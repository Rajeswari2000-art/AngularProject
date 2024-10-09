import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketShare } from './ticket-share.model';

@Injectable({
  providedIn: 'root'
})
export class TicketSharingService {

  private apiUrl = 'http://localhost:8080/shares';

  constructor(private http: HttpClient) {}

  getTicketSharings(): Observable<TicketShare[]> {
    return this.http.get<TicketShare[]>(this.apiUrl);
  }

  getTicketSharing(ticketId: number, sharedWithId: number): Observable<TicketShare> {
    return this.http.get<TicketShare>(`${this.apiUrl}?ticketId=${ticketId}&sharedWithId=${sharedWithId}`);
  }

  createTicketSharing(ticketSharing: TicketShare): Observable<TicketShare> {
    return this.http.post<TicketShare>(this.apiUrl, ticketSharing);
  }

  deleteTicketSharing(ticketId: number, sharedWithId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}?ticketId=${ticketId}&sharedWithId=${sharedWithId}`);
  }

}