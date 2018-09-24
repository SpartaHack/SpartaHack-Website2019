import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'apply',
    templateUrl: 'apply.component.html',
    styleUrls: ['apply.component.scss']
})

export class ApplyComponent implements OnInit {
    constructor() { }

    userInformation = {
        name: "",
        email: "",
    }

    ngOnInit() { }

    onSubmit() {}
}