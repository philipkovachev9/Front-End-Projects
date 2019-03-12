import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';


@Component({
  selector: 'app-animal-board',
  templateUrl: './animal-board.component.html',
  styleUrls: ['./animal-board.component.scss']
})
export class AnimalBoardComponent implements OnInit {

  constructor(public animalService: AnimalsService) {  }
  animalsArray = [];

  ngOnInit() {
    this.animalService.getAnimals().subscribe(
      list => {
        
      }
    );
  }
   
}
