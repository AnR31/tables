import { Component, ViewChild } from '@angular/core';
import { LESSONS } from 'src/db-data';
import { GRADES } from 'src/db-data';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
    `
      table {
        border-spacing: 0;
        empty-cells: hide;
      }
      td {
        padding: 10px 20px;
        text-align: center;
        border-bottom: 1px solid #f4eee8;
        transition: all 0.5s linear;
      }
      td:first-child {
        text-align: left;
        color: #3d3511;
        font-weight: bold;
      }
      th {
        padding: 10px 20px;
        color: #3d3511;
        border-bottom: 1px solid #f4eee8;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      td:nth-child(even) {
        background: #f6d27e;
      }
      td:nth-child(odd) {
        background: #d1c7bf;
      }
      th:nth-child(even) {
        background: #f6d27e;
      }
      th:nth-child(odd) {
        background: #d1c7bf;
      }
      .round-top {
        border-top-left-radius: 5px;
      }
      .round-bottom {
        border-bottom-left-radius: 5px;
      }
      tr:hover td {
        background: #d1c7bf;
        font-weight: bold;
      }
    `,
  ],
})
export class BasicComponent {
  LESSONS;
  GRADES;
  obj;

  @ViewChild('nmbr') nmbr;
  @ViewChild('dt') dt;
  @ViewChild('tpc') tpc;
  @ViewChild('hmwrk') hmwrk;
  @ViewChild('nt') nt;
  @ViewChild('mySel') mySel;
  @ViewChild('name') name;

  constructor() {
    this.LESSONS = LESSONS;
    localStorage.setItem('lessons', JSON.stringify(this.LESSONS));
    this.GRADES = GRADES;
  }

  onClick($event) {
    this.obj = {
      id: this.nmbr.nativeElement.value,
      date: this.dt.nativeElement.value,
      topic: this.tpc.nativeElement.value,
      homework: this.hmwrk.nativeElement.value,
      note: this.nt.nativeElement.value,
    };
    LESSONS.push(this.obj);
    GRADES.push({
      name: 'Newman',
      mid_grade: 4.5,
      rounded_mid_grade: 4,
      grades: [ {lesson: 1, score: 99}, {lesson: 2, score: 99}, {lesson: 3, score: 99}, {lesson: 4, score: 99} ],
    });
    localStorage.setItem('lessons', JSON.stringify(this.LESSONS));
  }
  onClickSelect(event, name, score) {
    console.log(this.mySel.nativeElement.options.selectedIndex + " " + name + " " + score)
    
  }

  onClickAddStudent(event) {

    GRADES.push({
      name: this.name.nativeElement.value,
      mid_grade: 4.5,
      rounded_mid_grade: 4,
      grades: [ {lesson: 1, score: 99}, {lesson: 2, score: 99}, {lesson: 3, score: 99} ],
    });
  }
//toElement.options.selectedIndex
}
