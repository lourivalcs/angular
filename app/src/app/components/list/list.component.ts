import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces'
import { MessageService, UserService } from '../../services'

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  selectedUser?: IUser
  users?: Array<IUser>

  constructor(private userService: UserService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.findUsers()
  }

  clickButton(user: IUser) {
    this.selectedUser = user
    this.messageService.add(user.name)
  }

  findUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users)
  }


}
