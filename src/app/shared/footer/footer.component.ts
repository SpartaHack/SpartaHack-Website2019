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

    goToFacebook() {
        window.location.href = "https://www.facebook.com/spartahackmsu/";
    }

    goToTwitter() {
        window.location.href = "https://twitter.com/SpartaHack";
    }

    goToInsta() {
        window.location.href = "https://www.instagram.com/spartahackmsu/";
    }

    goToGitHub() {
        window.location.href = "https://github.com/SpartaHack";
    }
}