import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideToastr } from 'ngx-toastr';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { ReopenTicketComponent } from './reopen-ticket/reopen-ticket.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { SupportDashboardComponent } from './support-dashboard/support-dashboard.component';
import { RaisesTicketComponent } from './raises-ticket/raises-ticket.component';
import { TicketsListsComponent } from './tickets-lists/tickets-lists.component';
import { ViewsUserComponent } from './views-user/views-user.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { ShareTicketComponent } from './share-ticket/share-ticket.component';
import { ShareTicketListComponent } from './share-ticket-list/share-ticket-list.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';
import { ApprovalStatusComponent } from './approval-status/approval-status.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ViewsUsersComponent } from './views-users/views-users.component';
import { ApproveTicketsComponent } from './approve-tickets/approve-tickets.component';
import { TicketsListssComponent } from './tickets-listss/tickets-listss.component';
import { NotificationComponent } from './notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationsComponent } from './notifications/notifications.component';
import { TicketUpdatesComponent } from './ticket-updates/ticket-updates.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SupportProfileComponent } from './support-profile/support-profile.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserListComponent,
    CreateUserComponent,
    UpdateUserComponent,
    TicketListComponent,
    MemberDashboardComponent,
    ViewUserComponent,
    RaiseTicketComponent,
    ReopenTicketComponent,
    TicketsListComponent,
    SupportDashboardComponent,
    RaisesTicketComponent,
    TicketsListsComponent,
    ViewsUserComponent,
    UpdateTicketComponent,
    ViewTicketComponent,
    ShareTicketComponent,
    ShareTicketListComponent,
    ApprovalRequestComponent,
    ApprovalStatusComponent,
    ManagerDashboardComponent,
    ViewsUsersComponent,
    ApproveTicketsComponent,
    TicketsListssComponent,
    NotificationComponent,
    NotificationsComponent,
    TicketUpdatesComponent,
    ProfileComponent,
    AdminProfileComponent,
    SupportProfileComponent,
    MemberProfileComponent,
    ViewAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration(),
    provideToastr(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
