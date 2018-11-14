import { UserService } from './shared/user/user.service';
import { ApplicationResolver } from './shared/application/application.resolver';
import { UserResolver } from './shared/user/user.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountService } from './account/account.service';
import { ApplicationService } from './shared/application/application.service';
import { FooterComponent } from './shared/footer/footer.component';
import { LocalHeaderComponent } from './shared/local-header/local-header.component';
import { FaqResolver } from './faq/faq.resolver';
import { FaqService } from './faq/faq.service';
import { MailingListService } from './mailing-list/mailing-list.service';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { LoginComponent } from './account/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AppRoutingModule } from './router.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { HttpClientModule, HttpClientJsonpModule } from '../../node_modules/@angular/common/http';
import { CreateAccountComponent } from './account/create/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplyComponent,
    FaqComponent,
    NavbarComponent,
    LoginComponent,
    MailingListComponent,
    LocalHeaderComponent,
    FooterComponent,
    CreateAccountComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    MailingListService,
    FaqService,
    FaqResolver,
    ApplicationService,
    AccountService,
    UserService,
    UserResolver,
    ApplicationResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
