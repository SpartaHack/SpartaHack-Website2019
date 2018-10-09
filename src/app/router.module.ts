import { FaqResolver } from './faq/faq.resolver';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { ApplyComponent } from './apply/apply.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'faq', component: FaqComponent,
        resolve: {
            faqs: FaqResolver
        }    
    },
    { path: 'login', component: LoginComponent },
    { path: 'apply', component: ApplyComponent},
    { path: 'subscribe', component: MailingListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
