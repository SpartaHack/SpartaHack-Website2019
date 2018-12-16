import { User } from './../shared/user/user.model';
import { Application } from './../shared/application/application.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'] 
})

export class DashboardComponent implements OnInit {

    application: Application;
    user: User;

    not_signed_up: boolean = false;

    managing: boolean = false;

    showingChangePassword: boolean = false;
    showingEditApplication: boolean = false;
    showingDeleteAccount: boolean = false;

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
        }
        if(this.route.snapshot.data['application'].not_signed_up)
        {
            this.not_signed_up = true;
        }
        else
        {
            this.application = this.route.snapshot.data['application']
        }
    }

    onApplyClick() {
        this.router.navigate(['apply']);
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

    onEdit() {
        this.showingEditApplication = true;
    }
    onEditClosed() {
        this.showingEditApplication = false;
    }

    onPassword() {
        this.showingChangePassword = true;
    }
    onPasswordClosed() {
        this.showingChangePassword = false;
    }
}