import { AccountService } from './../../account/account.service';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserResolver implements Resolve<any> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        if(AccountService.isUserLoggedIn()) {
            return this.userService.getUser(Number(localStorage.getItem('user id')))
        } 
        else {
            console.log("Not Signed In!");
            return of({not_signed_in: true});
        }
    }
}