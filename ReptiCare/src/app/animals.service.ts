import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup, FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor() {}
  form = new FormGroup({
    $key: new FormControl(null),
    animalName: new FormControl(''),
    species: new FormControl(''),
    age: new FormControl(''),
    lastFed: new FormControl(''),
    lastShed: new FormControl(''),
    diet: new FormControl(''),
    comments: new FormControl('')
  });
}
