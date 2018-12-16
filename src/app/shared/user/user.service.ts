import { User, PasswordChange } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    getUser(userId: number): Observable<User> {

        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        //Add a new User
        return this.httpClient.get<User>(environment.baseUrl + "/users/" + userId, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    deleteUser(userId: number): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        //DELETE User
        return this.httpClient.delete<User>(environment.baseUrl + "/users/" + userId, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }

    changePassword(passwords: PasswordChange): Observable<any> {
        let httpOptions = {
            headers: new HttpHeaders(
                { 
                    'Content-Type': 'application/json',
                    'X-WWW-USER-TOKEN': window.sessionStorage.getItem('auth token')
                }
            )
        };

        return this.httpClient.post<User>(environment.baseUrl + "/users/change_password", passwords, httpOptions)
            .pipe(
                catchError(this.handleError)
            )
    }


    isUserLoggedIn(): boolean {
        return Number(window.sessionStorage.getItem('user id')) != 0
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
                    message: "An Error Occurred, please try again."
                }
            );
        }
    };
}