import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-add-new-animal',
  templateUrl: './add-new-animal.component.html',
  styleUrls: ['./add-new-animal.component.scss']
})
export class AddNewAnimalComponent implements OnInit {

  constructor(private animalsService: AnimalsService) { }
  submitted: boolean;
  succesMessage: boolean;
  formControl = this.animalsService.form.controls;

  ngOnInit() {
  
  }
  
  onSubmit() {
    this.submitted = true;
    if(this.animalsService.form.valid) {
      if(this.animalsService.form.get('$key').value == null)
      this.succesMessage = true;
      setTimeout(() => this.succesMessage = false, 3000);
      this.submitted = false;
    }
  }
}
