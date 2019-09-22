import { Component, OnInit, Input, ViewChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { SortEvent, ThSortableDirective } from 'src/app/_directives/th-sortable.directive';

@Component({
  selector: 'app-lms-table',
  templateUrl: './lms-table.component.html',
  styleUrls: ['./lms-table.component.scss']
})
export class LmsTableComponent implements OnInit {

  @Input() defaultSort: string;
  @Input() headers: Array<object> = [];
  @Input() rows: Array<object> = [];

  @Output() onAction: EventEmitter<object> = new EventEmitter<object>();

  @ViewChildren(ThSortableDirective) headersDirective: QueryList<ThSortableDirective>;
  public columnNumberArray: Array<number> = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.headers.length; i++) {
      this.columnNumberArray.push(i);
    }
  }

  compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

  onSort({ column, direction }: SortEvent) {
    this.headersDirective.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction === '') {
      this.rows = this.rows.sort((a, b) => {
        return this.compare(a[this.defaultSort], b[this.defaultSort]);
      });
    } else {
      this.rows = this.rows.sort((a, b) => {
        const res = this.compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

  onActionClick(name: string, row: object) {
    this.onAction.emit({ name, row });
  }
}
