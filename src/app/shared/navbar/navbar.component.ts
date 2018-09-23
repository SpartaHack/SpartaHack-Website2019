import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    onHome() {
        this.router.navigate(['']);
    }
    onApply() {
        // this.router.navigate(['apply']);
        this.router.navigate(['subscribe']);
    }
    onLogIn() {
        this.router.navigate(['login']);
    }
    onFaq() {
        this.router.navigate(['faq']);
    }
    onContact() {
        window.scrollTo(0,document.body.scrollHeight);
    }
}