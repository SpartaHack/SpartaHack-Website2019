import { Application } from './application.model';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders(
        { 
            'Content-Type': 'application/json',
            'X-WWW-USER-TOKEN': window.localStorage.getItem('auth token')
        }
    )
};

@Injectable()
export class ApplicationService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    postApplication(application: Application): Observable<any> {

        //get the user information based on username
        //Eventually, this makes the call to the API, Not a local data set
        return this.httpClient.post<any>(environment.baseUrl + "/applications/", application, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    getApplication(appID: number): Observable<Application> {

        //get the user information based on username
        //Eventually, this makes the call to the API, Not a local data set
        return this.httpClient.get<Application>(environment.baseUrl + "/applications/" + appID, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user-facing error message
        return throwError(error);
      };
}