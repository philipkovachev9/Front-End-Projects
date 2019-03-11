import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class AnimalsService {

  constructor(public firebase: AngularFireDatabase) {

  }
  animalList: AngularFireList<any>
  form = new FormGroup({
    $key: new FormControl(null),
    animalName: new FormControl('', Validators.required),
    species: new FormControl('', Validators.required),
    age: new FormControl(''),
    lastFed: new FormControl(''),
    lastShed: new FormControl(''),
    diet: new FormControl('', Validators.required),
    comments: new FormControl('')
  });
}
