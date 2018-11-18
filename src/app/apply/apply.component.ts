import { ApplicationSubmission } from './../shared/application/application.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../shared/application/application.service';


@Component({
    selector: 'apply',
    templateUrl: 'apply.component.html',
    styleUrls: ['apply.component.scss']
})

export class ApplyComponent implements OnInit {

    //options for vairous for options boxes
    educationLevels = [
        'High School Diploma',
        'Bachelors Degree',
        'Masters Degree',
        'Doctorate'
    ]
    graduationSeasons = [
        'Spring',
        'Summer',
        'Fall'
    ]
    races = [
        'White',
        'Black or African American',
        'Hispanic or Latino',
        'American Indian or Alaska Native',
        'Asian',
        'Pacific Islander',
        'Other',
        'Prefer not to Specify'
    ]
    genders = [
        'Male',
        'Female',
        'Other/Non-Binary',
        'Prefer not to Specify'
    ]

    submitted: boolean = false;

    error = "";

    application: ApplicationSubmission = new ApplicationSubmission();

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
        else if(this.route.snapshot.data['user'].application_id != null) //Already applied!
        {
            this.submitted = true;
        }
    }

    onSubmit() {

        //split birth entry
        let birthArray = this.application.birth_day.toString().split("-");
        console.log(birthArray);
        this.application.birth_day = Number(birthArray[2])
        this.application.birth_month = Number(birthArray[1])
        this.application.birth_year = Number(birthArray[0])

        this.applyService.postApplication(this.application).subscribe(response => {
            this.submitted = true;
        },
        error => {
            this.error = error;
        })
    }
}