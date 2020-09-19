import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  getScore(studentId, lessonId, LessonScores) {
    let score;
    if (LessonScores.length == 0) return 1;
    LessonScores.forEach((lessonScore) => {
      if (lessonId == lessonScore.lessonId && studentId == lessonScore.studentId) score = lessonScore.score; else score = 1;
    });
    return score;
  }

}
