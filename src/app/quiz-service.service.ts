import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class QuizService {
  score: number;
  private nbQuestions: number;

  private shuffle(a: any[]): any[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  buildNewQuiz() {
    const observable = new Observable(subscriber => {

    })
    
  }

  constructor() { }
}
