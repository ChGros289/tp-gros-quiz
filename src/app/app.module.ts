import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ScoreComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
