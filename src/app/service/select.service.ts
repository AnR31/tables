import { Injectable } from '@angular/core';

import { LessonScore } from '../model/lessonScore';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  LessonScores: LessonScore[] = JSON.parse(
    localStorage.getItem('lessonScores')
  );

  constructor() {
    if (this.LessonScores == null) {
      this.LessonScores = [];
    }
  }

  // проверяем пустой ли список, если да - пушим,
  // если нет проверяем есть ли объект с таким студентИд и лессонИд, если да - присваиваем значение оценки, если нет - пушим
  processScore(event, studentId, lessonId) {
    if (this.LessonScores.length == 0) {
      this.LessonScores.push({
        studentId: studentId,
        lessonId: lessonId,
        score: event.srcElement.options.selectedIndex,
      });
      localStorage.setItem('lessonScores', JSON.stringify(this.LessonScores));
    } else {
      let isFound = false;
      this.LessonScores.forEach((lessonScore) => {
        if (
          lessonId == lessonScore.lessonId &&
          studentId == lessonScore.studentId
        ) {
          lessonScore.score = event.srcElement.options.selectedIndex;
          isFound = true;
        }
      });
      if (!isFound) {
        this.LessonScores.push({
          studentId: studentId,
          lessonId: lessonId,
          score: event.srcElement.options.selectedIndex,
        });
        localStorage.setItem('lessonScores', JSON.stringify(this.LessonScores));
      }
    }
  }
}
