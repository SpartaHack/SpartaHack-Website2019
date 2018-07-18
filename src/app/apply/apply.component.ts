import { Component, OnInit } from '@angular/core';
import { ApplyService } from './apply.service';
import { User } from '../shared/user/user.model';

@Component({
    selector: 'apply',
    templateUrl: 'apply.component.html',
    styleUrls: ['apply.component.scss']
})

export class ApplyComponent implements OnInit {
    constructor(
        private applyService: ApplyService
    ) { }

    userInformation = {
        name: "",
        email: "",
    }

    ngOnInit() { }

    onSubmit() {
        let users: User[];
        this.applyService.getUsers()
                .subscribe(data => {
                    users = data;
                    for(let user of users) {
                        if(user.name == this.userInformation.name) {
                            console.log("name: " + user.name)
                        }
                    }
                });
    }

}
