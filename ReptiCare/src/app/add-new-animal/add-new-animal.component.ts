import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-add-new-animal',
  templateUrl: './add-new-animal.component.html',
  styleUrls: ['./add-new-animal.component.scss']
})
export class AddNewAnimalComponent implements OnInit {

  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
  }
  
  onSubmit() {
    if(this.animalsService.form.get('$key').value === null) {
      
    }
  }
}
