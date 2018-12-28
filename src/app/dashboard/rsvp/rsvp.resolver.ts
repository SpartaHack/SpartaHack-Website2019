import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RsvpService } from './rsvp.service';

@Injectable()
export class RsvpResolver implements Resolve<any> {

    constructor(private rsvpService: RsvpService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        if(this.rsvpService.isRsvp()) {
            return this.rsvpService.getRsvp(Number(window.sessionStorage.getItem('user id')))
        } 
        else {
            console.log("Not RSVPed!");
            return of({no_rsvp: true});
        }
    }
}