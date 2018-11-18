import { AccountService } from '../../account/account.service';
import { ApplicationService } from './../application/application.service';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnInit {

    loggedIn: boolean = false;
    applied: boolean = false;

    constructor(private router: Router, 
            private userService: UserService, 
            private applicationService: ApplicationService,
            private accountService: AccountService) {
        router.events.forEach((event) => {
            if(event instanceof NavigationStart) {
                //See if there is any state change
                this.refreshNavbar();
            }
          });
    }

    ngOnInit() { 

    }

    refreshNavbar() {
        this.loggedIn = this.userService.isUserLoggedIn();
        this.applied = this.applicationService.hasUserApplied();
    }

    onHome() {
        this.router.navigate(['']);
    }
    onApply() {
        this.router.navigate(['apply']);
    }
    onDashboard() {
        this.router.navigate(['dashboard']);
    }
    onLogIn() {
        this.router.navigate(['login']);
    }
    onLogOut() {
        this.accountService.logout();
    }
    onFaq() {
        this.router.navigate(['faq']);
    }
    onContact() {
        window.scrollTo(0,document.body.scrollHeight);
    }
}