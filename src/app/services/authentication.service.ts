import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  getToken(): any {
    return localStorage.getItem('token');
  }

  logIn(): Observable<any> {
    return this.http.get<User>('http://localhost:3000/users');
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/log-in']);
  }

}
