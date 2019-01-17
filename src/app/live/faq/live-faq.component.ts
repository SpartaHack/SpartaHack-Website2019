import { Component, Input, Output, OnInit } from '@angular/core';
import { Faq } from 'src/app/faq/faq.model';

@Component({
    selector: 'live-faq',
    templateUrl: 'live-faq.component.html',
    styleUrls: ['live-faq.component.scss']
})

export class LiveFaqComponent implements OnInit {

    selected: Faq;

    @Input() faqs: Faq[];

    constructor() { }

    ngOnInit() { 
        this.selected = this.faqs[0];
    }

    onSelected(faq: Faq) {
        this.selected = faq;
      }
}