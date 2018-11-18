import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApplicationService } from 'src/app/shared/application/application.service';
import { AccountService } from 'src/app/account/account.service';

@Injectable()
export class ApplicationResolver implements Resolve<any> {

    constructor(private applicationService: ApplicationService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        if(this.applicationService.hasUserApplied()) {
            return this.applicationService.getApplication(Number(sessionStorage.getItem('application id')))
        } 
        else {
            console.log("Not Applied!");
            return of({not_signed_up: true});
        }
    }
}