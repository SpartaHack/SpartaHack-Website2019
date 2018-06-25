import { SignupFormComponent } from './signupform/signupform.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'register', component: SignupFormComponent}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
