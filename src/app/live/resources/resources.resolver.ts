import { ResourceService } from './resources.service';
import { Resource } from './resources.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from 'node_modules/@angular/router';
import { Observable } from 'node_modules/rxjs';

@Injectable()
export class ResourceResolver implements Resolve<Resource[]> {

    constructor(private service: ResourceService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return this.service.getResources();
    }
}