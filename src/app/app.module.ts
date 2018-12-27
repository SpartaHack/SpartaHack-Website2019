import { FileValidator } from './dashboard/rsvp/file-input.validator';
import { FileValueAccessor } from './dashboard/rsvp/file-control-value-accessor';
import { AllApplicationResolver } from './shared/application/all-application.resolver';
import { AdminComponent } from './admin/admin.component';
import { SendResetComponent } from './account/reset/send-reset.component';
import { ApplyAndEditComponent } from './apply-and-edit/apply-and-edit.component';
import { DeleteAccountComponent } from './dashboard/delete-account/delete-account.component';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';
import { BadgeComponent } from './shared/badge/badge.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';
import { MajorsService } from './shared/majors/majors.service';
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
import { HttpClientModule, HttpClientJsonpModule } from '../../node_modules/@angular/common/http';
import { CreateAccountComponent } from './account/create/create-account.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TextMaskModule } from 'angular2-text-mask';
import { ResetComponent } from './account/reset/reset.component';
import { ReviewApplicationsComponent } from './admin/review-applications/review-applications.component';
import { RsvpService } from './dashboard/rsvp/rsvp.service';
import { RsvpComponent } from './dashboard/rsvp/rsvp.component';
import { RsvpResolver } from './dashboard/rsvp/rsvp.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplyAndEditComponent,
    FaqComponent,
    NavbarComponent,
    LoginComponent,
    MailingListComponent,
    LocalHeaderComponent,
    FooterComponent,
    CreateAccountComponent,
    DashboardComponent,
    SponsorsComponent,
    ResetComponent,
    SendResetComponent,
    BadgeComponent,
    ChangePasswordComponent,
    DeleteAccountComponent,
    AdminComponent,
    ReviewApplicationsComponent,
    RsvpComponent,
    FileValueAccessor,
    FileValidator
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatAutocompleteModule,
    TextMaskModule
  ],
  providers: [
    MailingListService,
    FaqService,
    FaqResolver,
    ApplicationService,
    MajorsService,
    AccountService,
    UserService,
    UserResolver,
    ApplicationResolver,
    AllApplicationResolver,
    RsvpService,
    RsvpResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
