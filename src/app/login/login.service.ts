import { User } from './../shared/user/user.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    //By the way, this is an example, and not final
    getUsers(): Observable<User[]> {

        //get the user information based on username
        //Eventually, this makes the call to the API, Not a local data set
        return this.httpClient.get<User[]>("assets/users.json", httpOptions)
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