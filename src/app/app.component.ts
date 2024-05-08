/* É AQUI  que coloco os DADOS que quero COMPARTILHAR com OUTRO COMPONENTE */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName =
    'João'; /* quero compart. os dados do João --> no Template app.componente preciso sinalizar que quero fazer esse comapartilhamento */

  /* Objeto para compartilhamento */
  userData = {
    email: 'joao@email.com',
    age: 30,
  };
  title = 'Curso-Angular';
}
