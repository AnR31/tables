import { Component, ViewChild } from '@angular/core';

import { Lesson } from '../model/lesson';
import { Student } from '../model/student';
import { LessonScore } from '../model/lessonScore';
import { SelectService } from '../service/select.service';
import { GetAvgService } from '../service/get-avg.service';
import { GetIndexService } from '../service/get-index.service';
import { GetScoreService } from '../service/get-score.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['basicStyle.css'],
})
export class BasicComponent {

  Lessons: Lesson[] = JSON.parse(localStorage.getItem('lessons'));
  Students: Student[] = JSON.parse(localStorage.getItem('students'));
  LessonScores: LessonScore[] = JSON.parse(
    localStorage.getItem('lessonScores')
  );

  studentId: number = 0;
  lessonId: number = 0;
  selIndex: number = 0;

  @ViewChild('studentName') studentName;

  addLessonForm: FormGroup;

  addStudentForm: FormGroup;

  constructor(
    private selectService: SelectService,
    private getAvgService: GetAvgService,
    private getIndexService: GetIndexService,
    private getScoreService: GetScoreService
  ) {
    this._createForm();
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

  private _createForm() {
    this.addLessonForm = new FormGroup({
      lessonNumber: new FormControl(null),
      lessonDate: new FormControl(null),
      lessonTopic: new FormControl(null),
      lessonHomework: new FormControl(null),
      lessonNote: new FormControl(null),
    }),
    this.addStudentForm = new FormGroup({
      studentName: new FormControl(null),
    })
  }

  onClickAddLesson() {
    this.Lessons.push({
      id: this.lessonId++,
      number: this.addLessonForm.get('lessonNumber').value,
      date: this.addLessonForm.get('lessonDate').value,
      topic: this.addLessonForm.get('lessonTopic').value,
      homework: this.addLessonForm.get('lessonHomework').value,
      note: this.addLessonForm.get('lessonNote').value,
    });
    localStorage.setItem('lessons', JSON.stringify(this.Lessons));
  }

  onClickAddStudent() {
    this.Students.push({
      id: this.studentId++,
      name: this.addStudentForm.get('studentName').value,
    });
    localStorage.setItem('students', JSON.stringify(this.Students));
  }

  onClickSelect(event, studentId, lessonId) {
    this.selectService.processScore(event, studentId, lessonId);
  }

  getScore(studentId, lessonId) {
    return this.getScoreService.getScore(studentId, lessonId);
  }

  getAvg(studentId) {
    return this.getAvgService.getAvg(studentId);
  }

  getRoundedAvg(studentId) {
    return this.getAvgService.getRoundedAvg(studentId);
  }

  getIndex(studentId, lessonId) {
    return this.getIndexService.getIndex(studentId, lessonId);
  }
}
