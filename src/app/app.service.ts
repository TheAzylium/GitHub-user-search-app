import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
  constructor(private readonly _http: HttpClient) {}

  getUsers(userName: string): Observable<any> {
    return this._http.get<any>(`https://api.github.com/users/${userName}`)
  }
}
