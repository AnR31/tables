import { Injectable } from '@angular/core';

import { LessonScore } from '../model/lessonScore';

@Injectable({
  providedIn: 'root'
})
export class GetIndexService {

  LessonScores: LessonScore[] = JSON.parse(
    localStorage.getItem('lessonScores')
  );

  constructor() {
    if (this.LessonScores == null) {
      this.LessonScores = [];
    }
  }

  getIndex(studentId, lessonId) {
    let index;
    if (this.LessonScores.length == 0) return 0;
    this.LessonScores.forEach((lessonScore) => {
      if (
        lessonId == lessonScore.lessonId &&
        studentId == lessonScore.studentId
      ) {
        index = lessonScore.score;
      }
    });
    return index;
  }
}
