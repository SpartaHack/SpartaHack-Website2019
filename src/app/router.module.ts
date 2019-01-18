import { CheckInComponent } from './admin/check-in/check-in.component';
import { PrizeResolver } from './live/prizes/prizes.resolver';
import { AnnouncementResolver } from './live/announcements/announcements.resolver';
import { LiveComponent } from './live/live.component';
import { AllApplicationResolver } from './shared/application/all-application.resolver';
import { AdminComponent } from './admin/admin.component';
import { ApplyAndEditComponent } from './apply-and-edit/apply-and-edit.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { ApplicationResolver } from './shared/application/application.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './account/create/create-account.component';
import { FaqResolver } from './faq/faq.resolver';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './account/login/login.component';
import { UserResolver } from './shared/user/user.resolver';
import { ResetComponent } from './account/reset/reset.component';
import { SendResetComponent } from './account/reset/send-reset.component';
import { ReviewApplicationsComponent } from './admin/review-applications/review-applications.component';
import { RsvpResolver } from './dashboard/rsvp/rsvp.resolver';
import { ScheduleResolver } from './live/schedule/schedule.resolver';
import { AllUserResolver } from './shared/user/all-users.resolver';

const routes: Routes = [
    { path: 'volunteer', component: MailingListComponent },

    //Open Paths
    { path: '', redirectTo: 'live', pathMatch: 'full'},
    { path: 'static', component: HomeComponent },
    { path: 'faq', component: FaqComponent,
        resolve: {
            faqs: FaqResolver
        }    
    },

    //User Paths
    { path: 'create', component: CreateAccountComponent },
    { path: 'login', component: LoginComponent },
    { path: 'send-reset', component: SendResetComponent },
    { path: 'reset/:token', component: ResetComponent },
    { path: 'application', component: ApplyAndEditComponent, 
        resolve: {
            user: UserResolver
        } 
    },
    { path: 'dashboard', component: DashboardComponent,
        resolve: {
            user: UserResolver,
            application: ApplicationResolver,
            rsvp: RsvpResolver
        } 
    },
    
    { path: 'admin', component: AdminComponent },
    { path: 'admin/review', component: ReviewApplicationsComponent,
        resolve: {
            applications: AllApplicationResolver
        } 
    },
    { path: 'admin/check-in', component: CheckInComponent,
        resolve: {
            users: AllUserResolver
        } 
    },

    { path: 'live', component: LiveComponent,
        resolve: {
            faqs: FaqResolver,
            schedule: ScheduleResolver,
            announcements: AnnouncementResolver,
            prizes: PrizeResolver
        } 
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
