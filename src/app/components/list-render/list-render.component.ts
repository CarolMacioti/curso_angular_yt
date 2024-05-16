import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalsDetails = '';

  constructor(private listservice: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalsDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  /* etapa de remoção de item no frontend */
  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listservice.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listservice.getAll().subscribe((animais) => (this.animals = animais));
  }
}
