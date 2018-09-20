import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'footer-component',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})

export class FooterComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    homeClick() {
        this.router.navigate(['']);
    }

    resumeClick() {
        this.router.navigate(['resume']);
    }

    portfolioClick() {
        this.router.navigate(['portfolio']);
    }

    aboutClick() {
        this.router.navigate(['about']);
    }
}