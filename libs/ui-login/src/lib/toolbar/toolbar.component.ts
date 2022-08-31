import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fantasy-busts-app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input()
  title!: string;
  @Output() toggleSidenav = new EventEmitter();
}
