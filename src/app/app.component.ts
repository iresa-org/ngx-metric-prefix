import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  libName = '@iresa/ngx-metric-prefix';
  numberControl = new FormControl('');
  displayValue$ = new Subject<string>();
  onNumChange$ = this.numberControl.valueChanges.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    tap((num) => this.displayValue$.next(num))
  );
}
