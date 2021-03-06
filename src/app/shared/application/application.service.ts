import { Application, ApplicationSubmission, College } from './application.model';
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

        return this.httpClient.post<any>(environment.baseUrl + "/applications", submission, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    updateApplicationSubmission(updatedApplication: ApplicationSubmission, id: number): Observable<any> {

        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        return this.httpClient.put<any>(environment.baseUrl + "/applications/" + id, updatedApplication, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    updateApplication(updatedApplication: Application, id: number): Observable<any> {

        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        return this.httpClient.put<any>(environment.baseUrl + "/applications/" + id, updatedApplication, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    getAllApplications(): Observable<Application[]> {
        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        return this.httpClient.get<Application[]>(environment.baseUrl + "/applications" , httpOptions)
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

        return this.httpClient.get<Application>(environment.baseUrl + "/applications/" + appID, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    getColleges(): Observable<College[]> {

        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json'
                }
            )
        };

        //get list of colleges from a local json file
        return this.httpClient.get<College[]>("assets/json/colleges.json", httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    hasUserApplied() {
        return window.sessionStorage.getItem('application id') != "null";
    }

    private handleError(error: HttpErrorResponse) {
        // TODO: More informative errors from backend for creation
        if(error.error.error_list != {})
        {
            return throwError(
                error.error
            );
        }
        else
        {
            return throwError(
                {
                    message: "An Error Occurred. Please double check entries."
                }
            );
        }
      };
}