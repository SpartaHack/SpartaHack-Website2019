import { Schedule } from './schedule.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'schedule',
    templateUrl: 'schedule.component.html'
})

export class ScheduleComponent implements OnInit {

    @Input() schedule: Schedule[];

    constructor() { }

    ngOnInit() { }
}