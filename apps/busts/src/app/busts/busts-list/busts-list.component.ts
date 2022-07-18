import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bust } from '@fantasy-busts-app/api-interfaces';

@Component({
  selector: 'fantasy-busts-app-busts-list',
  templateUrl: './busts-list.component.html',
  styleUrls: ['./busts-list.component.scss'],
})
export class BustsListComponent {
  @Input() busts: Bust[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
