import { Component, HostListener, ElementRef } from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
    selector: 'badge',
    templateUrl: 'badge.component.html',
    styleUrls:['badge.component.scss'],
    animations: [
        trigger('scrollAnimation', [
          state('show', style({
            opacity: 1,
            
          })),
          state('hide',   style({
            opacity: 0,
          })),
          transition('show => hide', animate('700ms')),
          transition('hide => show', animate('700ms'))
        ])
      ]
})

export class BadgeComponent {
    
    state = 'hide'
    zindexhidden = true;

    constructor(public el: ElementRef) { }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {

      const componentPosition = 90
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
        this.zindexhidden = false;
      } else {
        this.state = 'hide'
        this.zindexhidden = true;
      }

    }

    goIfShowing() {
        if(!this.zindexhidden) {
            window.location.href = "https://mlh.io/seasons/na-2019/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2019-season&utm_content=white"
        }
    }

}