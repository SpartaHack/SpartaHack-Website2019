import { PasswordReset } from './../account.model';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'reset',
    templateUrl: 'reset.component.html'
})

export class ResetComponent implements OnInit {

    submitted = false;
    passwords: PasswordReset = new PasswordReset();
    resetToken: string = "";

    error: string = "";

    constructor(
        private accountService: AccountService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() { 
        this.resetToken = this.activatedRoute.snapshot.params['token'];
    }

    onLogin() {
        this.router.navigate(['login']);
    }

    onSubmit() {

        this.error = "";

        //actually make the password reset call
        this.accountService.setNewPassword(this.passwords, this.resetToken).subscribe(
            data => { this.submitted = true; },
            error => {
                if(!this.isEmpty(error.error_list))
                {
                    console.log('here');
                    for (var key in error.error_list) {
                        if (error.error_list.hasOwnProperty(key)) {
                            this.error = error.error_list[key];
                        }
                    }
                }
                else
                {
                    this.error = "Something is not right! Ensure your passwords match and try again."
                }
            }
        );

        
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    
}