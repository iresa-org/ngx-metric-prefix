import { Pipe, PipeTransform } from '@angular/core';
import { RANGES } from './prefix-range';

@Pipe({
  name: 'prefix',
})
export class NgxMetricPrefixPipe implements PipeTransform {
  transform(value: number | null | undefined, ...args: unknown[]): string {
    if (value === undefined || value === null) {
      return '';
    }
    return formatNumber(value);
  }
}

function formatNumber(n): string {
  if (n === 0) {
    return n;
  } else if (n < 0) {
    return `-${formatNumber(-n)}`;
  } else {
    const { divider, suffix } = RANGES.find((range) => n >= range.divider);
    return suffix ? `${Math.round(n / divider)}${suffix}` : n;
  }
}
