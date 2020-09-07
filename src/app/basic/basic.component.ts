import { Component, OnInit } from '@angular/core';
import { LESSONS } from 'src/db-data';
import { GRADES } from 'src/db-data';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [],
})
export class BasicComponent {
  LESSONS;
  GRADES;
  constructor() {
    this.LESSONS = LESSONS;
    this.GRADES = GRADES;
  }
}
