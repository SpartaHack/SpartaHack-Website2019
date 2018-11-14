import { User } from './../shared/user/user.model';
import { UserInput, Credentials } from './account.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    createAccount(newUser: UserInput): Observable<any> {
        //Add a new User
        return this.httpClient.post<any>(environment.baseUrl + "/users", newUser, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    login(creds: Credentials): Observable<User> {
        return this.httpClient.post<User>(environment.baseUrl + "/sessions", creds, httpOptions)
        .pipe(
            catchError(this.handleError)
        )
    }

    static isUserLoggedIn(): boolean {
        return localStorage.getItem('user id') != null
    }

    private handleError(error: HttpErrorResponse) {
        // TODO: More informative errors from backend for creation
        if(error.error.error_list != {})
        {
            return throwError(
                error.error.error_list
            );
        }
        else
        {
            return throwError(
                {
                    message: "An Error Occurred. This Email may already be in use."
                }
            );
        }
      };
}