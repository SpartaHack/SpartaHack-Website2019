import { Resource } from './resources.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'resources',
    templateUrl: 'resources.component.html'
})

export class ResourcesComponent implements OnInit {

    @Input() resources: Resource[];

    constructor() { }

    ngOnInit() { }
}