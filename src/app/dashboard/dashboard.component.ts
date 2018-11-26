import { User } from './../shared/user/user.model';
import { Application } from './../shared/application/application.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    application: Application;
    user: User;

    not_signed_up: boolean = false;
    deleting: boolean = false;

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

    onEdit() {

    }

    onDelete() {
        this.deleting = true;
    }
}