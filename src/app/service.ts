import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User} from "./model";

@Injectable({
  providedIn: 'root'
})

export class Service {
  private static readonly APIURL: string = '/api/user/register';

  constructor(
    private http: HttpClient
  ) {}

  registerUser(user: User): Observable<void>{
    return this.http.post<void>(Service.APIURL, user);
  }

  // error(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = error.error.message;
  //   } else {
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
  // }
}
