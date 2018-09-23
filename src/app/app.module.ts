import { FooterComponent } from './shared/footer/footer.component';
import { LocalHeaderComponent } from './shared/local-header/local-header.component';
import { FaqResolver } from './faq/faq.resolver';
import { FaqService } from './faq/faq.service';
import { MailingListService } from './mailing-list/mailing-list.service';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';
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
    FooterComponent
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
    LoginService,
    MailingListService,
    FaqService,
    FaqResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
