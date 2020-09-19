import { Component, DoCheck, Input, ViewChild } from '@angular/core';
import { Lesson } from '../model/lesson';
import { Student } from '../model/student';
import { LessonScore } from '../model/lessonScore';
import { LessonService } from './lesson.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
})
export class BasicComponent implements DoCheck {
  Lessons: Lesson[] = JSON.parse(localStorage.getItem('lessons'));
  Students: Student[] = JSON.parse(localStorage.getItem('students'));
  LessonScores: LessonScore[] = JSON.parse(
    localStorage.getItem('lessonScores')
  );

  studentId: number = 0;
  lessonId: number = 0;

  selIndex: number = 0;

  @ViewChild('nmbr') nmbr;
  @ViewChild('dt') dt;
  @ViewChild('tpc') tpc;
  @ViewChild('hmwrk') hmwrk;
  @ViewChild('nt') nt;
  @ViewChild('name') name;

  @ViewChild('studentName') studentName;

  constructor(private serv: LessonService) {
    if (this.LessonScores == null) {
      this.LessonScores = [];
    }
    if (this.Students == null) {
      this.Students = [];
    }
    if (this.Lessons == null) {
      this.Lessons = [];
    }
  }
  ngDoCheck(): void {
    localStorage.setItem('lessons', JSON.stringify(this.Lessons));
    localStorage.setItem('students', JSON.stringify(this.Students));
    localStorage.setItem('lessonScores', JSON.stringify(this.LessonScores));
  }

  onClickAddLesson() {
    this.Lessons.push({
      id: this.lessonId++,
      number: this.nmbr.nativeElement.value,
      date: this.dt.nativeElement.value,
      topic: this.tpc.nativeElement.value,
      homework: this.hmwrk.nativeElement.value,
      note: this.nt.nativeElement.value,
    });
  }

  onClickAddStudent() {
    this.Students.push({
      id: this.studentId++,
      name: this.studentName.nativeElement.value,
    });
  }

  // проверяем пустой ли список, если да - пушим,
  // если нет проверяем есть ли объект с таким студентИд и лессонИд, если да - присваиваем значение оценки, если нет - пушим
  onClickSelect(event, studentId, lessonId) {
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
