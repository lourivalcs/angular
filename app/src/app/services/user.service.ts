import { Injectable } from '@angular/core';
import { IUser } from '../interfaces';
import { list } from '../components/list/list'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<Array<IUser>> {
    return of(list)
  }
}