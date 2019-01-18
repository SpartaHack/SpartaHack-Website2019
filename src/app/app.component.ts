import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  badgeEnabled = true;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
          //See if there is any state change
          window.scroll(0,0);
          if(event.url.includes('live'))
          {
            this.badgeEnabled = false;
          }
          else
          {
            this.badgeEnabled = true;
          }
      }
    });
  }

}
