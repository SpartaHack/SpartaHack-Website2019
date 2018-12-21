import { UserService } from './../../shared/user/user.service';
import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { Credentials } from '../account.model';


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

    userInput: Credentials = new Credentials(); 

    error: string = "";

    constructor(
        private accountService: AccountService,
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() { }

    onCreate() {
        this.router.navigate(['create']);
    }

    onResetPassword() {
        //navigate to reset page
        this.router.navigate(['send-reset']);
    }

    onSubmit() {
        this.error = "";

        this.accountService.login(this.userInput).subscribe(
            response => { //Successful login
                //Save variables needed to load dashboard
                window.sessionStorage.setItem('application id', String(response.application_id))
                window.sessionStorage.setItem('user id', String(response.id))

                //Required to be passed in every header for restricted access pages
                window.sessionStorage.setItem('auth token', String(response.auth_token))

                //Set admin status. If they are not an admin on login, they never will be.
                if(response.role == "organizer" || response.role == "director") {
                    window.sessionStorage.setItem('admin', "True");
                }

                //Navigate Based on application status
                if(response.application_id == null)
                {
                    //If not applied, go to apply
                    this.router.navigate(['application'])
                }
                else
                {
                    //Otherwise, go to dashboard
                    this.router.navigate(['dashboard'])
                }
            },
            error => {
                this.error = error.error_list.email
            }
        );
    }
}