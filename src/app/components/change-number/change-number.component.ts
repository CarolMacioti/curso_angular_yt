import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css'],
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.changeNumber.emit(); /* uso este comando para emitir o evento criado e inicializado no OUTPUT, pq sei que ele será chamado, mas não sei quando isso vai acontecer */
  }
}
