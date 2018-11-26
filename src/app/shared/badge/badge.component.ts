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

    constructor(public el: ElementRef) { }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        console.log(window.pageYOffset);
      const componentPosition = 90
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

}