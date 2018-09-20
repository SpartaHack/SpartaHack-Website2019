import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'local-header',
    templateUrl: 'local-header.component.html'
})

export class LocalHeaderComponent implements OnInit {
    @Input() title: string = "";

    constructor() { }

    ngOnInit() { }
}