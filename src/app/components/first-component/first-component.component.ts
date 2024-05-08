import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  /* Iniciar as PROPRIEDADES antes do constructor, 
  1: criar VARIÁVEL --> infromar o TIPO --> passar o VALOR */

  name: string =
    'Carolina'; /* para IMPRIMIR NO TEMPLATE, vou no HTML e chamo ela */
  age: number = 29;
  job = 'Programadora';
  /* LISTA */ hobbies = ['crossfit', 'séries', 'viagem'];

  /* ARRAY */ car = {
    modelo: 'Gol',
    cor: 'preto',
    ano: '2010',
  };

  constructor() {}

  ngOnInit(): void {}
}
