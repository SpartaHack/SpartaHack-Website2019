import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/user/user.model';
import { UserService } from '../shared/user/user.service';

@Component({
    selector: 'admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.scss']
})

export class AdminComponent implements OnInit {

    user: User;
    canReview: boolean = true;

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        //Is Logged in?
        if(!this.userService.isUserLoggedIn()) {
            //redirect to login
            this.router.navigate(['login']);
        }
        else if(!this.userService.isAdmin()) {
            this.router.navigate(['']);
        }
        if(this.userService.isVolunteer()) {
            this.canReview = false;
        }
    }

    onReview() {
        this.router.navigate(['admin/review']);
    }

    onCheck() {
        this.router.navigate(['admin/check-in']);
    }
}