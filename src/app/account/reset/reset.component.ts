import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
    selector: 'reset',
    templateUrl: 'reset.component.html'
})

export class ResetComponent implements OnInit {

    passwordReset = false;
    resetEmail: string = "";

    error: string = "";

    constructor(
        private accountService: AccountService,
        private router: Router
    ) { }

    ngOnInit() { }

    onResetCancel() {
        //Navigate back to login page
        this.router.navigate(['login']);
    }

    onResetConfirm() {
        //actually make the password reset call
        this.accountService.resetPassword(this.resetEmail).subscribe(
            data => { this.passwordReset = true; },
            error => {
                this.error = error.error_list.email
            }
        );

        
    }

    
}