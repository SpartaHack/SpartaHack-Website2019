import { Schedule } from './schedule/schedule.model';
import { Prize } from './prizes/prizes.model';
import { Faq } from './../faq/faq.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Announcement } from './announcements/announcements.model';
import { Resource } from './resources/resources.model';

@Component({
    selector: 'live',
    templateUrl: 'live.component.html',
    styleUrls: ['live.component.scss']
})

export class LiveComponent implements OnInit {

    //All of these are pulled in on initalization of live site via resolvers
    announcements: Announcement[] = [];
    faqs: Faq[] = [];
    prizes: Prize[] = [];
    resources: Resource[] = [];
    schedule: Schedule[] = [];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 

        //Get FAQs
        let faqs: Faq[] = this.route.snapshot.data['faqs'];

        faqs = faqs.sort((n1,n2) => n1.priority - n2.priority);
        faqs = faqs.filter(faq => (faq.display == true));
        this.faqs = faqs.filter(faq => (faq.placement == "live"));

        //Get Announcemnets
        // let a: Announcement[] = this.route.snapshot.data['announcements'];

        // a = a.sort((n1,n2) => n1.number - n2.number);
        // this.announcements = a.filter(a => (a.display == true));
        this.announcements = this.route.snapshot.data['announcements'];

    
        //Get Prizes
        this.prizes = this.route.snapshot.data['prizes'];

        //Get Resources
        this.resources = this.route.snapshot.data['resources'];

        //Get Schedule
        this.schedule = this.route.snapshot.data['schedule'];

    }
}