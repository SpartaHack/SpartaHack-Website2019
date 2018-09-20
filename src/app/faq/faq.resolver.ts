import { FaqService } from './faq.service';
import { Faq } from './faq.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../node_modules/@angular/router';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class FaqResolver implements Resolve<Faq[]> {

    constructor(private faqService: FaqService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return this.faqService.getFaqs();
    }
}