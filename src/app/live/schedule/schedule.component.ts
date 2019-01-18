import { Schedule } from './schedule.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'schedule',
    templateUrl: 'schedule.component.html',
    styleUrls: ['schedule.component.scss']
})

export class ScheduleComponent implements OnInit {

    @Input() schedule: Schedule[];

    constructor() { }

    ngOnInit() { }
}