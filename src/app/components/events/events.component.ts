import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  /* criando o método para o Evento de Click por uma função*/
  /* uso o 'this' pra chamar o ESTE evento e atribuo o valor TRUE, oposto ao valor default da prop. para que a mensagem seja exibida somente após o clique: this.show = true; */

  showMessage(): void {
    this.show = !this.show;
  }
}

/* Também da pra usar o TOGGLE usando o valor inverso da variável, isto é, sempre que this.show for true, vou retornar o oposto, que é um false, pra isso só presico repetir a declaração e colocar uma exclamação na frente: this.show = !this.show; */
