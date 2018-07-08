import { ApplyComponent } from './apply/apply.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'login', component: LoginComponent },
    { path: 'apply', component: ApplyComponent}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}
