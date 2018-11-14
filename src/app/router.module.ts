//import { MailingListComponent } from './mailing-list/mailing-list.component';
import { ApplicationResolver } from './shared/application/application.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './account/create/create-account.component';
import { FaqResolver } from './faq/faq.resolver';
import { ApplyComponent } from './apply/apply.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './account/login/login.component';
import { UserResolver } from './shared/user/user.resolver';

const routes: Routes = [
    //{ path: 'subscribe', component: MailingListComponent },

    //Open Paths
    { path: '', component: HomeComponent },
    { path: 'faq', component: FaqComponent,
        resolve: {
            faqs: FaqResolver
        }    
    },

    //User Paths
    { path: 'create', component: CreateAccountComponent },
    { path: 'login', component: LoginComponent },
    { path: 'apply', component: ApplyComponent, 
        resolve: {
            user: UserResolver
        } 
    },
    { path: 'dashboard', component: DashboardComponent,
        resolve: {
            application: ApplicationResolver,
            user: UserResolver
        } 
    }
    
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
