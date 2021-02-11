import { Component, OnInit } from '@angular/core';
import { list } from './list'
import { IUser } from '../../interfaces'

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  selectedUser?: IUser
  list = list
  constructor() { }

  ngOnInit(): void {
  }

  clickButton(user: IUser) {
    this.selectedUser = user
  }
}
