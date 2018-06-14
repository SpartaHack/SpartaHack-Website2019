import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SignupFormComponent} from './signupform/signupform.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '', component: SignupFormComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}