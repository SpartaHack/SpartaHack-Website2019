import { UserService } from './../../shared/user/user.service';
import { PasswordChange } from './../../shared/user/user.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'change-password',
    templateUrl: 'change-password.component.html'
})

export class ChangePasswordComponent {

    @Input() showing;
    @Output() closed = new EventEmitter<boolean>();

    passwordFields = new PasswordChange();
    error: string = ""; 
    finished: boolean = false;

    constructor(private userService: UserService) { }

    onSubmit() {
        this.error = "";

        if(this.passwordsMatch()) {
            this.userService.changePassword(this.passwordFields).subscribe(
                data => {
                    this.finished = true;
                },
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
                        this.error = "Something is not right! Double check your info and try again."
                    }
                }
            )
        }
        else {
            this.error = "Password and confirmation do not match!"
        }
    }

    onClose() {
        //reset fields and close
        this.passwordFields = new PasswordChange();
        this.finished = false;
        this.closed.emit(true);
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    passwordsMatch() {
        return this.passwordFields.password == this.passwordFields.password_confirmation;
    }
}