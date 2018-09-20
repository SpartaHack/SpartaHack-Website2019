import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '../../../node_modules/@angular/animations';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    animations: [
        trigger('logoIn', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style ({
                    opacity: 0,
                    transform: 'scale(1.1)'
                }),
                animate(700, 
                    style ({
                        opacity: 1,
                        transform: 'scale(1.0)'
                    })
                )
            ])
        ]),
        trigger('lineEnter', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style ({
                    opacity: 0,
                }),
                animate('500ms 700ms', 
                    style ({
                        opacity: 1,
                    })
                )
            ])
        ]),
        trigger('textEnter', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style ({
                    opacity: 0,
                }),
                animate('500ms 1000ms', 
                    style ({
                        opacity: 1,
                    })
                )
            ])
        ]),
        trigger('bodyEnter', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style ({
                    opacity: 0,
                }),
                animate('500ms 1500ms', 
                    style ({
                        opacity: 1,
                    })
                )
            ])
        ]),
    ]
})

export class HomeComponent implements OnInit {
    
    mailClick() {
        this.router.navigate(['subscribe'])
    }

    prospectusClick() {
        window.location.href = ""
    }

    tierClick() {
        window.location.href = ""
    }

    constructor(private router: Router) { }

    ngOnInit() { }
}