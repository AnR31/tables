import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { LESSONS } from 'src/db-data';
import { GRADES } from 'src/db-data';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [],
})
export class BasicComponent implements AfterViewInit {
  LESSONS;
  GRADES;
  constructor() {
    this.LESSONS = LESSONS;
    this.GRADES = GRADES;
  }

  @ViewChild('nmbr')
  nmbr: ElementRef;

  @ViewChild('dt')
  dt: ElementRef;

  @ViewChild('tpc')
  tpc: ElementRef;

  @ViewChild('hmwrk')
  hmwrk: ElementRef;

  @ViewChild('nt')
  nt: ElementRef;

  onClick($event) {
    console.log(this.nt.nativeElement.value);
    this.LESSONS.push('this.nmbr', 'this.dt', 'this.tpc', 'this.hmwrk', 'this.nt')
  }

  ngAfterViewInit() {
    //console.log(this.nt.nativeElement);
  }
}
