import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 3 },
    { name: 'Frida', type: 'Dog', age: 10 },
    { name: 'Bob', type: 'Horse', age: 8 },
  ];

  animalsDetails = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalsDetails = `o pet ${animal.name} tem ${animal.age} anos de vida!`
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
