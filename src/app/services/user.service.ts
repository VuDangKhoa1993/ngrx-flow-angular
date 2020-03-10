import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserHttp } from '../models/user-http.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = `${environment.apiUrl}users.json`;
  constructor(private httpClient: HttpClient) { }
  
  getUsers(): Observable<IUserHttp> {
    return this.httpClient.get<IUserHttp>(this.userUrl);
  }
}
