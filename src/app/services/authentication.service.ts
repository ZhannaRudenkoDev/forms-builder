import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token')!;
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${environment.apiUrl}/login`;
    return this.http.post<User>(url, {email, password});
  }

  signUp(email: string, password: string): Observable<User> {
    const url = `${environment.apiUrl}/register`;
    return this.http.post<User>(url, {email, password});
  }

}
