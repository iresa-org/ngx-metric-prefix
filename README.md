# NGX-METRIC-PREFIX


[![npm version](https://badge.fury.io/js/%40iresa%2Fngx-metric-prefix.svg)](https://badge.fury.io/js/%40iresa%2Fngx-metric-prefix)
[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

> Pretify big numbers with metric prefix in modern Angular app

A fast, reliable pipe to format javascript numbers using only few significant digits and a metric prefix. 

Demo: https://iresa-org.github.io/ngx-metric-prefix


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors-)

## Installation

From your project folder, run `ng add @iresa/ngx-metric-prefix`

This command will import `NgxMetricPrefixModule` into your `AppModule`:

```ts
import { NgxMetricPrefixModule } from '@iresa/ngx-metric-prefix';
 
@NgModule({
  ...
  imports: [
    ...
    
    // NgxMetricPrefixModule
    NgxMetricPrefixModule, 
    ...
  ],
  ...
})
export class AppModule {}
```

Or register `NgxMetricPrefixModule` to a feature module with following code:

```ts
import { NgxMetricPrefixModule } from '@iresa/ngx-metric-prefix';
 
@NgModule({
  ...
  imports: [
    ...
    
    // NgxMetricPrefixModule
    NgxMetricPrefixModule, 
    ...
  ],
  ...
})
export class FeatureModule {}
```

## Usage

```html

<p>{{ 123 | prefix }}</p>
<!-- Display: 123 -->

<p>{{ 1234 | prefix }}</p>
<!-- Display: 1k -->

<p>{{ 12345 | prefix }}</p>
<!-- Display: 12k -->

<p>{{ 123456 | prefix }}</p>
<!-- Display: 123k -->

<p>{{ 1234567 | prefix }}</p>
<!-- Display: 1M -->

<p>{{ 1234567890 | prefix }}</p>
<!-- Display: 1G -->

<p>{{ 1234567890123 | prefix }}</p>
<!-- Display: 1T -->

<p>{{ 1234567890123456 | prefix }}</p>
<!-- Display: 1P -->

<p>{{ 1234567890123456789 | prefix }}</p>
<!-- Display: 1E -->

<p>{{ 1234567890123456789012 | prefix }}</p>
<!-- Display: 1235E -->

```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kxbui"><img src="https://avatars2.githubusercontent.com/u/5092371?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Khoi Bui</b></sub></a><br /><a href="https://github.com/@iresa/ngx-metric-prefix/commits?author=kxbui" title="Code">💻</a> <a href="#design-kxbui" title="Design">🎨</a> <a href="https://github.com/@iresa/ngx-metric-prefix/commits?author=kxbui" title="Documentation">📖</a> <a href="#ideas-kxbui" title="Ideas, Planning, & Feedback">🤔</a> <a href="#projectManagement-kxbui" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

This project uses schematics from [@ngneat/lib](https://github.com/ngneat/lib) to generate boilerplate used for open source library. 
