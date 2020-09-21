import { Injectable } from '@angular/core';

import { LessonScore } from '../model/lessonScore';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  lessonScores: LessonScore[] = JSON.parse(
    localStorage.getItem('lessonScores')
  );

  constructor() {
    if (this.lessonScores == null) {
      this.lessonScores = [];
    }
  }

  // проверяем пустой ли список, если да - пушим,
  // если нет проверяем есть ли объект с таким студентИд и лессонИд, если да - присваиваем значение оценки, если нет - пушим
  processScore(event, studentId, lessonId) {
    console.log('вызван processScore, ' + 'studentId = ' + studentId + ', lessonId = ' + lessonId + ', event.srcElement.options.selectedIndex = ' + event.srcElement.options.selectedIndex);
    if (this.lessonScores.length == 0) {
      this.lessonScores.push({
        studentId: studentId,
        lessonId: lessonId,
        score: event.srcElement.options.selectedIndex,
      });
      localStorage.setItem('lessonScores', JSON.stringify(this.lessonScores));
    } else {
      let isFound = false;
      this.lessonScores.forEach((lessonScore) => {
        if (
          lessonId == lessonScore.lessonId &&
          studentId == lessonScore.studentId
        ) {
          console.log('ставим оценку');
          lessonScore.score = event.srcElement.options.selectedIndex;
          console.log(lessonScore);
          isFound = true;
        }
      });
      if (!isFound) {
        this.lessonScores.push({
          studentId: studentId,
          lessonId: lessonId,
          score: event.srcElement.options.selectedIndex,
        });

      }
      localStorage.clear;
      localStorage.setItem('lessonScores', JSON.stringify(this.lessonScores));
    }
  }
}
