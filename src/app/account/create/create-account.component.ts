import { AccountService } from './../account.service';
import { UserInput } from './../account.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'create-account',
    templateUrl: 'create-account.component.html',
    styleUrls: ['create-account.component.scss']
})

export class CreateAccountComponent {

    //for displaying errors, should they arise
    error: string = "";

    //Once User has submitted, close form
    submitted: boolean

    //Model for the form's User Input
    userInput: UserInput = new UserInput();

    constructor(
        private accountService: AccountService,
        private router: Router
    ) { }

    onLogin() {
        this.router.navigate(['login']);
    }

    onSubmit() {
        
        this.error = "";

        if(this.passwordsMatch()) {
            this.accountService.createAccount(this.userInput).subscribe(response => {
                if (!response.message) {
                    this.submitted = true;
                }
            }, error => {
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
                    this.error = "Something is not right! Have you used this email before?."
                }
            });
        }
        else {
            this.error = "Your Password and Confirmation do not match!"
        }
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    passwordsMatch() {
        return this.userInput.password == this.userInput.password_confirmation;
    }
}