import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketUpdates } from './ticket-updates.model';

@Injectable({
  providedIn: 'root'
})
export class TicketUpdatesService {

  private apiUrl = 'http://localhost:8080/updates';

  constructor(private http: HttpClient) {}

  getTicketUpdates(): Observable<TicketUpdates[]> {
    return this.http.get<TicketUpdates[]>(this.apiUrl);
  }

  getTicketUpdate(id: number): Observable<TicketUpdates> {
    return this.http.get<TicketUpdates>(`${this.apiUrl}/${id}`);
  }

  createTicketUpdate(ticketUpdate: TicketUpdates): Observable<TicketUpdates> {
    return this.http.post<TicketUpdates>(this.apiUrl, ticketUpdate);
  }

  updateTicketUpdate(id: number, ticketUpdate: TicketUpdates): Observable<TicketUpdates> {
    return this.http.put<TicketUpdates>(`${this.apiUrl}/${id}`, ticketUpdate);
  }

  deleteTicketUpdate(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}