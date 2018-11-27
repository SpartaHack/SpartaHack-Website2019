import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MajorsService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    getMajors(): Observable<any> {

        //Add a new User
        return this.httpClient.get<any>('assets/json/majors.json', )
            .pipe(
                catchError(this.handleError)
            )
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
      };
}