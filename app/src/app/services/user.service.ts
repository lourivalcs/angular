import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'

interface Request{
  result: Array<object>
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlUsers: string = 'https://randomuser.me/api/?results=10'
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<Request>(this.urlUsers)
  }
}