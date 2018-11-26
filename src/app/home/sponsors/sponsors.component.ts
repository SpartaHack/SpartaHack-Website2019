import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'sponsors',
    templateUrl: 'sponsors.component.html',
    styleUrls: ['sponsors.component.scss']
})

export class SponsorsComponent implements OnInit {
    constructor(@Inject(DOCUMENT) private document: any) { }

    ngOnInit() { }

    goToUrl(url: string) {
        this.document.location.href = url;
    }
}