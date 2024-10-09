import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailNotification } from './email-notification.model';

@Injectable({
  providedIn: 'root'
})
export class EmailNotificationService {

  private apiUrl = 'http://localhost:8080/email';

  constructor(private http: HttpClient) { }

  createNotification(notification: EmailNotification): Observable<EmailNotification> {
    return this.http.post<EmailNotification>(this.apiUrl, notification);
  }

  getAllNotifications(): Observable<EmailNotification[]> {
    return this.http.get<EmailNotification[]>(this.apiUrl);
  }

}