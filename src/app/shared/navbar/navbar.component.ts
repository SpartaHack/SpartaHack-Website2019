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
        this.router.navigate(['apply']);
    }
    onLogIn() {
        this.router.navigate(['login']);
    }
    onFaq() {
        this.router.navigate(['faq']);
    }
}