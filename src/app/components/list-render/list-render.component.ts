import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  /* Array de objetos - criando uma lista de animais para renderizar -> crio e tipifico */
  animals: Animal[] = [
    { name: 'Mia', type: 'Cat', age: 7 },
    { name: 'Jimmy', type: 'Dog', age: 11 },
    { name: 'Marula', type: 'Dog', age: 2 },
    { name: 'Toddy', type: 'Cat', age: 2 },
    { name: 'Baia', type: 'Horse', age: 5 },
  ];

  animalsDetails = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalsDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
