import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: any;
  iQuestion = 0;
  currentQuestion: any;
  answer: string;
  found: boolean;
  hasNext = true;

  constructor() { }

  ngOnInit() {
  }
  newGame() {
    this.currentQuestion = "une question";

  }

  loadNextQuestion() {
    this.iQuestion = this.iQuestion + 1;

  }

  timeSpent() {

  }

  answerGiven(answer: String){

  }

  showAnswer() {

  }

}
