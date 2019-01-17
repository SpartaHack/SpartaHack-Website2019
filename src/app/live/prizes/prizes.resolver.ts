import { PrizeService } from './prizes.service';
import { Prize } from './prizes.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from 'node_modules/@angular/router';
import { Observable } from 'node_modules/rxjs';

@Injectable()
export class PrizeResolver implements Resolve<Prize[]> {

    constructor(private service: PrizeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return this.service.getPrizes();
    }
}