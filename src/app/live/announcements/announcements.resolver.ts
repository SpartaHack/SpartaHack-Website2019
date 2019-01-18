import { AnnouncementService } from './announcements.service';
import { Announcement } from './announcements.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from 'node_modules/@angular/router';
import { Observable } from 'node_modules/rxjs';

@Injectable()
export class AnnouncementResolver implements Resolve<Announcement[]> {

    constructor(private service: AnnouncementService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return this.service.getAnnouncements();
    }
}