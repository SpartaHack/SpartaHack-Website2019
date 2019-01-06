import { Rsvp } from './rsvp.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class RsvpService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    addRsvp(rsvpInfo: Rsvp): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        return this.httpClient.post<Rsvp>(environment.baseUrl + "/rsvps", rsvpInfo, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    putRsvp(rsvpInfo: Rsvp, id: number): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        return this.httpClient.put<Rsvp>(environment.baseUrl + "/rsvps/" + id, rsvpInfo, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    getRsvp(id: number): Observable<Rsvp> {
        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        return this.httpClient.get<Rsvp>(environment.baseUrl + "/rsvps/" + id, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    isRsvp(): boolean {
        return window.sessionStorage.getItem('rsvp id') != "null"
    }

    private handleError(error: HttpErrorResponse) {
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
                    message: error.status + ": " + error.statusText
                }
            );
        }
    };
}