import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '../../../../node_modules/@angular/animations';

@Component({
    selector: 'footer-component',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss'],
    animations: [
        trigger('mouseOver', [
            state('hovering', style ({
                    transform: 'scale(1.1)'
                })
            ),
            state ('idle', style ({
                    transform: 'scale(1.0)'
                })
            ),
            transition('idle => hovering', [   // :enter is alias to 'void => *'
                animate(200)
            ]),
            transition('hovering => idle', [   // :enter is alias to 'void => *'
                animate(100)
            ])
        ])
    ]
})

export class FooterComponent implements OnInit {

    facebookSrc = "assets/images/social/facebook.svg";
    twitterSrc = "assets/images/social/twitter.svg";
    instaSrc = "assets/images/social/insta.svg";
    githubSrc= "assets/images/social/github.svg";

    facebookHovering = false;
    twitterHovering = false;
    instaHovering = false;
    githubHovering = false;

    constructor(private router: Router) { }

    ngOnInit() { }

    goToFacebook() {
        window.location.href = "https://www.facebook.com/spartahackmsu/";
    }

    facebookEnter() {
        this.facebookSrc = "assets/images/social/facebook-glitch.svg";
        this.facebookHovering = true;
    }

    facebookLeave() {
        this.facebookSrc = "assets/images/social/facebook.svg";
        this.facebookHovering = false;
    }

    goToTwitter() {
        window.location.href = "https://twitter.com/SpartaHack";
    }

    twitterEnter() {
        this.twitterSrc = "assets/images/social/twitter-glitch.svg";
        this.twitterHovering = true
    }

    twitterLeave() {
        this.twitterSrc = "assets/images/social/twitter.svg";
        this.twitterHovering = false;
    }

    goToInsta() {
        window.location.href = "https://www.instagram.com/spartahackmsu/";
    }

    instaEnter() {
        this.instaSrc = "assets/images/social/insta-glitch.svg";
        this.instaHovering = true;
    }

    instaLeave() {
        this.instaSrc = "assets/images/social/insta.svg";
        this.instaHovering = false;
    }

    goToGithub() {
        window.location.href = "https://github.com/SpartaHack";
    }

    githubEnter() {
        this.githubSrc = "assets/images/social/github-glitch.svg";
        this.githubHovering = true;
    }

    githubLeave() {
        this.githubSrc = "assets/images/social/github.svg";
        this.githubHovering = false;
    }
}