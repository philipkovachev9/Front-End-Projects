import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-add-new-animal',
  templateUrl: './add-new-animal.component.html',
  styleUrls: ['./add-new-animal.component.scss']
})
export class AddNewAnimalComponent implements OnInit {

  constructor(public animalsService: AnimalsService) { }
  submitted: boolean;
  succesMessage: boolean;
  failMessage: boolean;
  formControl = this.animalsService.form.controls;

  ngOnInit() {
    this.animalsService.getAnimals();
   }
    
  onSubmit() {
    this.submitted = true;
    if(this.animalsService.form.valid) {
      if(this.animalsService.form.get('$key').value == null){
      this.animalsService.insertAnimal(this.animalsService.form.value);
      this.succesMessage = true;
      setTimeout(() => this.succesMessage = false, 3000);
      this.submitted = false;
      this.animalsService.form.reset();
      }
    }
  }
}
