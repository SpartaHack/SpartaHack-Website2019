import { Component, OnInit, Input } from '@angular/core';
import { Announcement } from './announcements.model';

@Component({
    selector: 'announcements',
    templateUrl: 'announcements.component.html'
})

export class AnnouncementsComponent implements OnInit {

    @Input() announcements: Announcement[];

    constructor() { }

    ngOnInit() { }
}