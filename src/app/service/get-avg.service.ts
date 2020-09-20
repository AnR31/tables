import { Injectable } from '@angular/core';

import { LessonScore } from '../model/lessonScore';

@Injectable({
  providedIn: 'root'
})
export class GetAvgService {

  LessonScores: LessonScore[] = JSON.parse(
    localStorage.getItem('lessonScores')
  );

  constructor() {
    if (this.LessonScores == null) {
      this.LessonScores = [];
    }
  }

  getAvg(studentId) {
    let sum = 0;
    let count = 0;
    if (this.LessonScores.length == 0) {
      return '-';
    }
    this.LessonScores.forEach((lessonScore) => {
      if (lessonScore.studentId == studentId) {
        count++;
        sum += lessonScore.score;
      }
    });
    if (count == 0) {
      return '-';
    }
    return (sum / count).toPrecision(3);
  }

  getRoundedAvg(studentId) {
    let sum = 0;
    let count = 0;
    if (this.LessonScores.length == 0) {
      return '-';
    }
    this.LessonScores.forEach((lessonScore) => {
      if (lessonScore.studentId == studentId) {
        count++;
        sum += lessonScore.score;
      }
    });
    if (count == 0) {
      return '-';
    }
    return Math.round(sum / count);
  }
}
