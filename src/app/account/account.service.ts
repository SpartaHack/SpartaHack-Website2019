import { User } from './../shared/user/user.model';
import { UserInput, Credentials, PasswordReset } from './account.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from '../../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AccountService {

    constructor(
        private httpClient: HttpClient,
        private router: Router
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

    resetPassword(email: string): Observable<User> {
        let emailJSON = {"email": email}

        return this.httpClient.post<User>(environment.baseUrl + "/users/request_password_token", emailJSON, httpOptions)
        .pipe(
            catchError(this.handleError)
        )
    }

    setNewPassword(passwords: PasswordReset, resetToken: string): Observable<User> {
        let newHttpOptions = {
            headers: new HttpHeaders({ 
                'Content-Type': 'application/json',
                'X-WWW-RESET-PASSWORD-TOKEN': resetToken
            })
        };
        return this.httpClient.post<User>(environment.baseUrl + "/users/reset_password", passwords, newHttpOptions)
        .pipe(
            catchError(this.handleError)
        )
    }

    logout() {
        //Unset session variables and return to home
        window.sessionStorage.removeItem('application id');
        window.sessionStorage.removeItem('user id');
        window.sessionStorage.removeItem('auth token');

        this.router.navigate(['']);
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
                    message: "An Error Occurred. This Email may already be in use."
                }
            );
        }
      };
}