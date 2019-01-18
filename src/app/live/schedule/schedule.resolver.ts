import { ScheduleService } from './schedule.service';
import { Schedule } from './schedule.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from 'node_modules/@angular/router';
import { Observable } from 'node_modules/rxjs';

@Injectable()
export class ScheduleResolver implements Resolve<Schedule[]> {

    constructor(private service: ScheduleService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return this.service.getSchedule();
    }
}