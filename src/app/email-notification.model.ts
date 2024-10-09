export class EmailNotification {
    id?: number;
    recipientEmail: string;
    subject: string;
    body: string;
    emailStatus?: string;
    sentAt?: string;
}