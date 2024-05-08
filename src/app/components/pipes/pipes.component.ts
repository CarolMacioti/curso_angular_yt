import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  /* imprimir um texto em caixa baixa - lowercase */
  someText = 'TESTANDO O PIPEROPERATOR EM PROPRIEDADES.';

  /* immprimir a data atualizada */
  today = new Date();

  constructor() {}

  ngOnInit(): void {}
}
