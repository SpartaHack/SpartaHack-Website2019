import { ApplicationService } from 'src/app/shared/application/application.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../shared/user/user.model';
import { UserService } from './../../shared/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'check-in',
    templateUrl: 'check-in.component.html'
})

export class CheckInComponent implements OnInit {

    existingUsers: User[];

    emailToCheck: string = "";
    selectedUser: User = new User();

    //Email form is showing or not
    emailEntered: boolean = false;

    //User is either: non-existent, existant, or checked in.
    userExists: boolean = false;
    userIsCheckedIn: boolean = false;

    //Adds a checkbox for minor forms if minor
    userisMinor: boolean = false;

    error = "";

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService) { }

    ngOnInit() {
        //Is Logged in?
        if(!this.userService.isUserLoggedIn()) {
            //redirect to login
            this.router.navigate(['login']);
        }
        else if(!this.userService.isAdmin()) {
            this.router.navigate(['']);
        }

        this.existingUsers = this.route.snapshot.data['users'];
    }

    onCheckConfirm() {
        for (let user of this.existingUsers)
        {
            if(user.email.toLowerCase() == this.emailToCheck.toLowerCase())
            {
                this.userExists = true;
                this.selectedUser = user;

                if(this.selectedUser.checked_in == true)
                {
                    this.userIsCheckedIn = true;
                }

                break;
            }
        }
        this.emailEntered = true;
    }

    onCheckCancel() {
        this.router.navigate(['']);
    }

    onCheckIn() {
        this.selectedUser.checked_in = true;
        
        this.userService.checkIn(this.selectedUser.id).subscribe(
            data => {
                this.userIsCheckedIn = true;
            },
            error => {
                this.error = "Someting went wrong!";
            }
        );

        this.resetForm();
    }

    resetForm() {
        this.emailToCheck = "";
        this.selectedUser = new User();
        this.emailEntered = false;
        this.userExists = false;
        this.userIsCheckedIn = false;
        this.userisMinor = false;
    }
}