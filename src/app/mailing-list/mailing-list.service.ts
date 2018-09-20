import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { MailMember, MailChimpResponse } from './mailing-list.model';
import { Injectable } from '@angular/core';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { catchError } from '../../../node_modules/rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'user': 'spartahack:baaa2b7e826ec02c2cf4d83afe1e73a8-us9' })
};

@Injectable()
export class MailingListService {

    constructor(
        private httpClient: HttpClient
    ) { }

    addMailMember(member: MailMember): Observable<MailChimpResponse> {

        const params = new HttpParams()
                .set('FNAME', member.firstName)
                .set('LNAME', member.lastName)
				.set('EMAIL', member.email)
				.set('b_03bbf4682a83a01eb78a6f8ae_19195e58a9', ''); // hidden input name

        let mailChimpURL = 'https://spartahack.us9.list-manage.com/subscribe/post-json?u=03bbf4682a83a01eb78a6f8ae&id=19195e58a9&' + params.toString()

        //get the user information based on username
        //Eventually, this makes the call to the API, Not a local data set
        return this.httpClient.jsonp<MailChimpResponse>(mailChimpURL, 'c')
            .pipe(
                catchError(this.handleError)
            )
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user-facing error message
        return throwError(
            error);
    };
}