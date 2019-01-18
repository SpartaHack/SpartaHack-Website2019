import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class AllUserResolver implements Resolve<any> {

    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        if(this.userService.isUserLoggedIn() && this.userService.isAdmin()) {
            return this.userService.getAllUsers()
        } 
        else {
            console.log("Not Signed In!");
            return of({not_signed_in: true});
        }
    }
}