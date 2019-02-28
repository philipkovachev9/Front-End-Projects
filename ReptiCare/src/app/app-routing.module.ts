import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimalBoardComponent } from './animal-board/animal-board.component';
import { AddNewAnimalComponent } from './add-new-animal/add-new-animal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'animal-board', component: AnimalBoardComponent },
  { path: 'add-new-animal', component: AddNewAnimalComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
