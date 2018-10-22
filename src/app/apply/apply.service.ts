import { Apply } from './apply.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApplyService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    postApplication(application: Apply): Observable<any> {

        //get the user information based on username
        //Eventually, this makes the call to the API, Not a local data set
        return this.httpClient.post<any>("https://api.spartahack.com/applications", application ,httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user-facing error message
        return throwError(error);
      };
}