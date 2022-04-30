import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from "./model";

@Injectable({
  providedIn: 'root'
})

export class Service {
  private static readonly APIURL: string = '/api/user/register';

  constructor(
    private http: HttpClient
  ) {
  }

  registerUser(user: User): Observable<void> {
    const body: User = {
      login: user.login,
      password: user.password
    }
    return this.http.post<void>(Service.APIURL, body);
  }

}
