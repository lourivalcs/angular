import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }
}
