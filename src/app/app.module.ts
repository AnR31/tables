import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { SatComponent } from './sat/sat.component';
import { FormsModule } from '@angular/forms';
import { MidDirective } from './sat/mid.directive';

@NgModule({
  declarations: [AppComponent, BasicComponent, SatComponent, MidDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
