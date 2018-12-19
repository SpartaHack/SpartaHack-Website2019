import { AccountService } from 'src/app/account/account.service';
import { UserService } from './../../shared/user/user.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'delete-account',
    templateUrl: 'delete-account.component.html',
    styleUrls: ['delete-account.component.scss']
})

export class DeleteAccountComponent {

    @Input() userID;
    @Input() showing;
    @Output() closed = new EventEmitter<boolean>();

    error: string = ""; 

    constructor(
        private accountService: AccountService,
        private userService: UserService
    ) { }

    onSubmit() {
        this.error = "";

        this.userService.deleteUser(this.userID).subscribe(
            data => {
                this.accountService.logout();
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
                    this.error = "Something is not right! Please try again."
                }
            }
        )
    }

    onClose() {
        //reset fields and close
        this.closed.emit(true);
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
}