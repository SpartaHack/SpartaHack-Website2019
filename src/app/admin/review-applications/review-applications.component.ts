import { ApplicationService } from './../../shared/application/application.service';
import { ActivatedRoute } from '@angular/router';
import { Application } from './../../shared/application/application.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'review-applications',
    templateUrl: 'review-applications.component.html',
    styleUrls: ['review-applications.component.scss']
})

export class ReviewApplicationsComponent implements OnInit {

    applications: Application[];
    applicationReviewing: Application;
    reviewing = false;

    constructor(
        private route: ActivatedRoute,
        private applicationService: ApplicationService
    ) { }

    ngOnInit() {
        this.applications = this.route.snapshot.data['applications'];

        //Move applications to be reviewed to the top
        let applied = this.applications.filter(x => x.status == 'Applied');
        let notApplied = this.applications.filter(x => x.status != 'Applied');

        this.applications = [];
        this.applications = applied.concat(notApplied);
    }

    onReview(index: number) {
        this.applicationReviewing = this.applications[index];
        this.reviewing = true;
    }

    onApprove(application: Application) {
        application.status = "Accepted";
        delete application.accepted_date;


        this.applicationService.updateApplication(application, application.id).subscribe(
            data => { this.onReviewClose() }
        );
    }
    onDeny(application: Application) {
        application.status = "Denied";
        delete application.accepted_date;

        this.applicationService.updateApplication(application, application.id).subscribe(
            data => { this.onReviewClose() }
        );

    }
    onReviewClose() {
        this.applicationReviewing = new Application();
        this.reviewing = false;
    }
}