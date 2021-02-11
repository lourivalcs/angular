import { Component, Input, OnInit } from '@angular/core'
import { IUser } from '../../interfaces'

@Component({
  selector: 'list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.less']
})
export class ListDetailsComponent implements OnInit {

  @Input() user?: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
