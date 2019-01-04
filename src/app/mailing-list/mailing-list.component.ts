import { MailingListService } from './mailing-list.service';
import { MailMember } from './mailing-list.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'mailing-list',
    templateUrl: 'mailing-list.component.html'
})

export class MailingListComponent implements OnInit {

    //Once User has submitted, close form
    submitted: boolean

    //for displaying errors, should they arise
    error: string = "";

    //the MailMember object that the template-driven form binds to
    member: MailMember = {
        email: '',
        firstName: '',
        lastName: ''
    }

    constructor(
        private mailService: MailingListService,
        private router: Router
    ) { }

    ngOnInit() { }


    cancel() {
        this.member = {
            email: '',
            firstName: '',
            lastName: ''
        }
        this.router.navigate(['']);
    }

    onSubmit() {
        this.error = "";
        this.mailService.addMailMember(this.member).subscribe(response => {
            if (response.result && response.result !== 'error') {
                this.submitted = true;
            }
            else {
                this.error = response.msg;
            }
        }, error => {
            console.error(error);
            this.error = 'Sorry, an error occurred.';
        });
    }
}