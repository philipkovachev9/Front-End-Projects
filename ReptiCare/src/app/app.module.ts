import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimalBoardComponent } from './animal-board/animal-board.component';
import { AddNewAnimalComponent } from './add-new-animal/add-new-animal.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimalsService } from './animals.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimalBoardComponent,
    AddNewAnimalComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AnimalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
