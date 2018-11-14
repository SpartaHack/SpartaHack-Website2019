import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../shared/application/application.model';
import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../shared/application/application.service';


@Component({
    selector: 'apply',
    templateUrl: 'apply.component.html',
    styleUrls: ['apply.component.scss']
})

export class ApplyComponent implements OnInit {

    submitted: boolean = false;

    error = "";

    application: Application = new Application();

    constructor(
        private applyService: ApplicationService,
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
            this.application.user_id = this.route.snapshot.data['user'].user_id
        }
    }

    onSubmit() {
        this.applyService.postApplication(this.application).subscribe(response => {

        },
        error => {
            this.error = error;
        })
    }
}