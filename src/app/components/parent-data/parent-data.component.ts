import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  /* Preciso trazer o comp pra cá importando o INPUT, tipar ele e atribi-lo a uma string vazia (que serve como inicializador, p\ que na hora que o usuário passar o 'name' o dado seja preenchido de forma personalizada) */
  @Input() name: string = '';

  /* tipando e iniciando(usando "!") um Objeto */
  @Input() userData!: { email: string; age: number };

  constructor() {}

  ngOnInit(): void {}
}
