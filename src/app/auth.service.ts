import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:8080/api/auth/signin', { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, JSON.stringify(user));
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  }

  getUserLoggedIn() {
    return localStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
  }
}
