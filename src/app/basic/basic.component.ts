import { Component, Input, ViewChild } from '@angular/core';
import { Lesson } from '../model/lesson';
import { Student } from '../model/student';
import { LessonScore } from '../model/lessonScore';
import { LessonService } from './lesson.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
})
export class BasicComponent {
  Lessons: Lesson[] = [];
  Students: Student[] = [];
  LessonScores: LessonScore[] = [];

  studentId: number = 1;

  @ViewChild('nmbr') nmbr;
  @ViewChild('dt') dt;
  @ViewChild('tpc') tpc;
  @ViewChild('hmwrk') hmwrk;
  @ViewChild('nt') nt;
  @ViewChild('mySel') mySel;
  @ViewChild('name') name;

  @ViewChild('studentName') studentName;

  constructor(private serv: LessonService) {
    //this.LessonScores.push({studentId: 1, lessonId: 1, score: 5})
  }

  onClickAddLesson() {
    this.Lessons.push({
      id: this.nmbr.nativeElement.value,
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

  onClickSelect(event, name, score) {
    console.log(
      this.mySel.nativeElement.options.selectedIndex + ' ' + name + ' ' + score
    );
  }

  getScore(studentId, lessonId) {
    return this.serv.getScore(studentId, lessonId, this.LessonScores);
  }
}

// getScore(studentId, lessonId) {
//   let score;
//   if (this.LessonScores.length == 0) return 1;
//   this.LessonScores.forEach(
//     this.callBackForEachLessonScore(studentId, lessonId, score)
//   );
//   return score;
// }

// callBackForEachLessonScore(studentId, lessonId, score) {
//   return (lessonScore) => {
//     if (
//       lessonId == lessonScore.lessonId &&
//       studentId == lessonScore.studentId
//     ) {
//       lessonScore.score;
//       return;
//     }  
//     score = 1;
    
//   };
// }
// }