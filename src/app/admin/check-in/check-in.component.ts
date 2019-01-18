import { Application } from './../../shared/application/application.model';
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
    selectedApplication: Application = new Application();

    //Email form is showing or not
    emailEntered: boolean = null;

    //User is either: non-existent, existant, or checked in.
    userExists: boolean = null;
    userIsCheckedIn: boolean = null;

    //Adds a checkbox for minor forms if minor
    userHasApplied: boolean = null;

    error = "";

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private applicationService: ApplicationService) { }

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
        (async () => { 
            for (let user of this.existingUsers)
            {
                if(user.email.toLowerCase() == this.emailToCheck.toLowerCase())
                {
                    this.userService.getUser(user.id).subscribe(
                        data => {
                            this.userExists = true;
                            this.selectedUser = data;
                            if(this.selectedUser.checked_in == true) {
                                this.userIsCheckedIn = true;
                            }
    
                            if(this.selectedUser.application_id != null) 
                            {
                                this.applicationService.getApplication(this.selectedUser.application_id).subscribe(
                                    data => {
                                        this.selectedApplication = data;
                                        this.userHasApplied = true;
                                    }
                                )
                            }
                        }
                    )
                    break;
                }
            }
            await delay(2000);
            
            this.emailEntered = true;
        })();

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
        this.error = "";
        this.emailToCheck = "";
        this.selectedUser = new User();
        this.emailEntered = null;
        this.userExists = null;
        this.userIsCheckedIn = null;
        this.userHasApplied = null;
    }
}

async function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}