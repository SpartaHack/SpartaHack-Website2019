import { Prize } from './prizes.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'prizes',
    templateUrl: 'prizes.component.html',
    styleUrls: ['prizes.component.scss']
})

export class PrizesComponent implements OnInit {

    @Input() prizes: Prize[];

    constructor() { }

    ngOnInit() { 

    }
}