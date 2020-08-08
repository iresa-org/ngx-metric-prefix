import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';

import { NgxMetricPrefixModule } from '@iresa/ngx-metric-prefix';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, MatInputModule, NgxMetricPrefixModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
