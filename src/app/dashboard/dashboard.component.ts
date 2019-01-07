import { User } from './../shared/user/user.model';
import { Application } from './../shared/application/application.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rsvp } from './rsvp/rsvp.model';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'] 
})

export class DashboardComponent implements OnInit {

    application: Application;
    user: User;
    rsvp: Rsvp = null;

    not_signed_up: boolean = false;
    no_rsvp :boolean = false;
    decisionMade: boolean = false;
    accepted: boolean = false;

    managing: boolean = false;

    showingChangePassword: boolean = false;
    showingEditApplication: boolean = false;
    showingDeleteAccount: boolean = false;
    showingRsvp: boolean = false;

    adminButtonEnabled: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        //Signed in check
        if(this.route.snapshot.data['user'].not_signed_in)
        {
            //redirect to login
            this.router.navigate(['login']);
        }
        else
        {
            this.user = this.route.snapshot.data['user'];

            if(this.user.role == "organizer" || this.user.role == "director")
            {
                this.adminButtonEnabled = true;
            }

        }
        if(this.route.snapshot.data['application'].not_signed_up)
        {
            this.not_signed_up = true;
        }
        else
        {
            this.application = this.route.snapshot.data['application']
            if(this.application.status != 'Applied')
            {
                this.decisionMade = true;
                if(this.application.status == 'Accepted') {
                    this.accepted = true;
                }
            }
        }
        if(this.route.snapshot.data['rsvp'].no_rsvp)
        {
            this.no_rsvp = true;
        }
        else 
        {
            this.rsvp = this.route.snapshot.data['rsvp'];
        }
    }

    onApplyClick() {
        this.router.navigate(['application']);
    }

    onAdmin() {
        this.router.navigate(['admin']);
    }

    onManage() {
        this.managing = true;
    }
    onDashboard() {
        this.managing = false;
    }

    onDelete() {
        this.showingDeleteAccount = true;
    }
    onDeleteClosed() {
        this.showingDeleteAccount = false;
    }

    onRsvp() {
        this.showingRsvp = true;
    }
    onRsvpClosed() {
        this.showingRsvp = false;
        this.no_rsvp = false;
    }

    onEdit() {
        this.router.navigate(['application']);
    }

    onPassword() {
        this.showingChangePassword = true;
    }
    onPasswordClosed() {
        this.showingChangePassword = false;
    }

    onFaq() {
        this.router.navigate(['faq']);
    }
}