import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  usersClicked: Array<string> = []
  constructor() { }

  add(user: string): void {
    this.usersClicked.unshift(user)
  }
}
