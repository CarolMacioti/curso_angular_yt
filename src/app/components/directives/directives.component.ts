import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  /* Diretiva de Estilos inline */
  size = 40;
  font = 'Arial';
  color = 'red';

  /* Diretiva de Classes --> lista de classe */
  classes = [
    'green-title',
    'small-title',
  ]; /* depois só preciso estilizar no css do comp. */

  constructor() {}

  ngOnInit(): void {}
}
