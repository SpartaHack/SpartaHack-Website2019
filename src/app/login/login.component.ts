import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../shared/user/user.model';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    userInformation = {
        username: "",
        password: "",
    }

    constructor(
        private loginService: LoginService
    ) { }

    ngOnInit() { }

    onSubmit() {
        let users: User[];
        this.loginService.getUsers()
                .subscribe(data => {
                    users = data;
                    for(let user of users) {
                        if(user.username == this.userInformation.username) {
                            console.log("user is admin: " + user.admin)
                        }
                    }
                });
    }
}