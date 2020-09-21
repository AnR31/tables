import { Component } from '@angular/core';

import { Lesson } from '../model/lesson';
import { Student } from '../model/student';
import { LessonScore } from '../model/lessonScore';
import { SelectService } from '../service/select.service';
import { GetAvgService } from '../service/get-avg.service';
import { GetIndexService } from '../service/get-index.service';
import { GetScoreService } from '../service/get-score.service';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['basic-style.css'],
})
export class BasicComponent {
  Lessons: Lesson[] = JSON.parse(localStorage.getItem('lessons'));
  Students: Student[] = JSON.parse(localStorage.getItem('students'));
  LessonScores: LessonScore[] = JSON.parse(
    localStorage.getItem('lessonScores')
  );
  someDate = new Date().toISOString().split('T')[0];
  studentId: number = 0;
  lessonId: number = 0;
  selIndex: number = 0;

  studentName: FormControl = new FormControl(null, [Validators.required]);

  lessonFormGroup: FormGroup;

  addStudentForm: FormGroup;

  constructor(
    private selectService: SelectService,
    private getAvgService: GetAvgService,
    private getIndexService: GetIndexService,
    private getScoreService: GetScoreService
  ) {
    this.lessonFormGroup = new FormGroup({
      lessonNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('[1-9]*'),
      ]),
      lessonDate: new FormControl(null, [Validators.required]),
      lessonTopic: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Zа-яА-Я]*'),
      ]),
      lessonHomework: new FormControl(null, [Validators.required]),
      lessonNote: new FormControl(null),
    });
    if (this.LessonScores == null) {
      this.LessonScores = [];
    }
    if (this.Students == null) {
      this.Students = [];
    }
    if (this.Lessons == null) {
      this.Lessons = [];
    }
    if (this.Students === undefined) {
      this.Students = [];
    }
  }

  onClickAddLesson() {
    if (this.lessonFormGroup.invalid) alert('Пожалуйста, будте внимательны при заполнении полей, их нужно заполнить правильно, иначе не получится добавить урок. Спасибо.');
    else {
      this.Lessons.push({
        id: this.lessonId++,
        number: this.lessonFormGroup.get('lessonNumber').value,
        date: this.lessonFormGroup.get('lessonDate').value,
        topic: this.lessonFormGroup.get('lessonTopic').value,
        homework: this.lessonFormGroup.get('lessonHomework').value,
        note: this.lessonFormGroup.get('lessonNote').value,
      });
      localStorage.setItem('lessons', JSON.stringify(this.Lessons));
    }
  }

  onClickAddStudent() {

    if (this.studentName.invalid) alert('надо заполнять все правильно');
    else {
    this.Students.push({
      id: this.studentId++,
      name: this.studentName.value,
    });
    localStorage.setItem('students', JSON.stringify(this.Students));
  } }

  onClickSelect(event, studentId, lessonId) {
    this.selectService.processScore(event, studentId, lessonId);
  }

  getScore(studentId, lessonId) {
    return this.getScoreService.getScore(studentId, lessonId);
  }

  getAvg(studentId) {
    console.log('this.getAvgService.getAvg(studentId) = ' + this.getAvgService.getAvg(studentId));
    return this.getAvgService.getAvg(studentId);
  }

  getRoundedAvg(studentId) {
    return this.getAvgService.getRoundedAvg(studentId);
  }

  getIndex(studentId, lessonId) {
    return this.getIndexService.getIndex(studentId, lessonId);
  } 

}
