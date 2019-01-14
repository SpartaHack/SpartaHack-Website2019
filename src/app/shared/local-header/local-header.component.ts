import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'local-header',
    templateUrl: 'local-header.component.html',
    styleUrls: ['./local-header.component.scss']
})

export class LocalHeaderComponent implements OnInit {
    @Input() title: string = "";

    constructor() { }

    ngOnInit() { }
}
