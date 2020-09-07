import { Component, ViewChild } from '@angular/core';
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
  obj;

  @ViewChild('nmbr') nmbr;
  @ViewChild('dt') dt;
  @ViewChild('tpc') tpc;
  @ViewChild('hmwrk') hmwrk;
  @ViewChild('nt') nt;

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
    localStorage.setItem('lessons', JSON.stringify(this.LESSONS));
  }
}
