import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';


@Component({
  selector: 'app-animal-board',
  templateUrl: './animal-board.component.html',
  styleUrls: ['./animal-board.component.scss']
})
export class AnimalBoardComponent implements OnInit {

  constructor(private animalService: AnimalsService) {}
  animalsArray = [];

  ngOnInit() {
    this.animalService.getAnimals().subscribe(
      list => {
        this.animalsArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        });
      });
  }
}
