import { ChangeNumberComponent } from './../change-number/change-number.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent implements OnInit {
  myNumber: number = 0; /* vou usar a função Math.random() ali no meu onChangeNumber para que o numero mude de forma aleatória */

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 10); /* 
    OBS: o ‘floor’ é usado para arredondar o número e não termos resultados com casas decimais.
     */
  }
}
