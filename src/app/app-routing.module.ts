import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { ReopenTicketComponent } from './reopen-ticket/reopen-ticket.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsListsComponent } from './tickets-lists/tickets-lists.component';
import { RaisesTicketComponent } from './raises-ticket/raises-ticket.component';
import { SupportDashboardComponent } from './support-dashboard/support-dashboard.component';
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
import { NotificationsComponent } from './notifications/notifications.component';
import { TicketUpdatesComponent } from './ticket-updates/ticket-updates.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SupportProfileComponent } from './support-profile/support-profile.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'member-dashboard', component: MemberDashboardComponent },
  { path: 'view-user/:id', component: ViewUserComponent },
  { path: 'raise-ticket', component: RaiseTicketComponent },
  { path: 'reopen-ticket', component: ReopenTicketComponent },
  { path: 'tickets-list', component: TicketsListComponent },
  { path: 'support-dashboard', component: SupportDashboardComponent },
  { path: 'tickets-lists', component: TicketsListsComponent },
  { path: 'raises-ticket', component: RaisesTicketComponent },
  { path: 'views-user/:id', component: ViewsUserComponent },
  { path: 'update-ticket/:id', component: UpdateTicketComponent },
  { path: 'view-ticket/:id', component: ViewTicketComponent },
  { path: 'share-ticket', component: ShareTicketComponent },
  { path: 'share-ticket-list', component: ShareTicketListComponent },
  { path: 'manager-dashboard', component: ManagerDashboardComponent },
  { path: 'views-users/:id', component: ViewsUsersComponent },
  { path: 'approval-request', component: ApprovalRequestComponent },
  { path: 'ticket-updates', component: TicketUpdatesComponent },
  { path: 'approval-status', component: ApprovalStatusComponent },
  { path: 'approve-tickets', component: ApproveTicketsComponent },
  { path: 'tickets-listss', component: TicketsListssComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin-profile', component:AdminProfileComponent },
  { path: 'support-profile', component: SupportProfileComponent },
  { path: 'member-profile', component: MemberProfileComponent },
  { path: 'view-admin/:id', component: ViewAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }