import { Application, ApplicationSubmission } from './application.model';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApplicationService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    postApplication(submission: ApplicationSubmission): Observable<any> {

        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        //get the user information based on username
        //Eventually, this makes the call to the API, Not a local data set
        return this.httpClient.post<any>(environment.baseUrl + "/applications", submission, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    getApplication(appID: number): Observable<Application> {

        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        //get the user information based on username
        //Eventually, this makes the call to the API, Not a local data set
        return this.httpClient.get<Application>(environment.baseUrl + "/applications/" + appID, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    hasUserApplied() {
        return window.sessionStorage.getItem('application id') != "null";
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user-facing error message
        return throwError(error);
      };
}