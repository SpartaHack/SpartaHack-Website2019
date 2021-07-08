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

    this.faqs = this.faqs.sort((n1,n2) => n1.priority - n2.priority);
    this.faqs = this.faqs.filter(faq => (faq.display == true));
    this.faqs = this.faqs.filter(faq => (faq.placement == "home"));

    console.log(this.faqs);

    this.selected = this.faqs[0];
  }
  addFilter(filter: string) {
    if (!filter) { return; }
    this.faqs = this.faqs.filter(faq => (faq.answer.toLowerCase().includes((filter.toLowerCase()))) || (faq.question.toLowerCase().includes((filter.toLowerCase()))) );
  }
  onSelected(faq: Faq) {
    this.selected = faq;
  }
}
