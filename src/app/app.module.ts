import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupFormComponent} from './signupform/signupform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
