import { Injectable } from '@angular/core';

import { LessonScore } from '../model/lessonScore';

@Injectable({
  providedIn: 'root'
})
export class GetScoreService {

  LessonScores: LessonScore[] = JSON.parse(
    localStorage.getItem('lessonScores')
  );

  constructor() {
    if (this.LessonScores == null) {
      this.LessonScores = [];
    }
  }

  getScore(studentId, lessonId) {
    let score;
    if (this.LessonScores.length == 0) return undefined;
    this.LessonScores.forEach((lessonScore) => {
      if (
        lessonId == lessonScore.lessonId &&
        studentId == lessonScore.studentId
      )
        score = lessonScore.score;
      else score = undefined;
    });
    return score;
  }
}
