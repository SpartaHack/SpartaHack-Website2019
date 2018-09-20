import { Faq } from './faq.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  
  faqs: Faq[];
  selected: Faq;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.faqs = this.route.snapshot.data['faqs'];
    this.selected = this.faqs[0];
  }

  onSelected(faq: Faq) {
    this.selected = faq;
  }
}
