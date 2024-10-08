export default [
  ['Date', 'Date', () => import(/* webpackChunkName: "docs/Date/Date" */ './docs/Date.md')],

  '属性',
  ['Date.prototype', 'prototype', () => import(/* webpackChunkName: "docs/Date/prototype" */ './docs/prototype.md')],
  ['Date.length', 'length', () => import(/* webpackChunkName: "docs/Date/length" */ './docs/length.md')],

  '方法',
  ['Date.now()', 'now', () => import(/* webpackChunkName: "docs/Date/now" */ './docs/now.md')],
  ['Date.parse()', 'parse', () => import(/* webpackChunkName: "docs/Date/parse" */ './docs/parse.md')],
  ['Date.UTC()', 'UTC', () => import(/* webpackChunkName: "docs/Date/UTC" */ './docs/UTC.md')],

  'Getter方法',
  ['getDate()', 'getDate', () => import(/* webpackChunkName: "docs/Date/getDate" */ './docs/getDate.md')],
  ['getDay()', 'getDay', () => import(/* webpackChunkName: "docs/Date/getDay" */ './docs/getDay.md')],
  ['getFullYear()', 'getFullYear', () => import(/* webpackChunkName: "docs/Date/getFullYear" */ './docs/getFullYear.md')],
  ['getHours()', 'getHours', () => import(/* webpackChunkName: "docs/Date/getHours" */ './docs/getHours.md')],
  ['getMilliseconds()', 'getMilliseconds', () => import(/* webpackChunkName: "docs/Date/getMilliseconds" */ './docs/getMilliseconds.md')],
  ['getMinutes()', 'getMinutes', () => import(/* webpackChunkName: "docs/Date/getMinutes" */ './docs/getMinutes.md')],
  ['getMonth()', 'getMonth', () => import(/* webpackChunkName: "docs/Date/getMonth" */ './docs/getMonth.md')],
  ['getSeconds()', 'getSeconds', () => import(/* webpackChunkName: "docs/Date/getSeconds" */ './docs/getSeconds.md')],
  ['getTime()', 'getTime', () => import(/* webpackChunkName: "docs/Date/getTime" */ './docs/getTime.md')],
  ['getTimezoneOffset()', 'getTimezoneOffset', () => import(/* webpackChunkName: "docs/Date/getTimezoneOffset" */ './docs/getTimezoneOffset.md')],
  ['getUTCDate()', 'getUTCDate', () => import(/* webpackChunkName: "docs/Date/getUTCDate" */ './docs/getUTCDate.md')],
  ['getUTCDay()', 'getUTCDay', () => import(/* webpackChunkName: "docs/Date/getUTCDay" */ './docs/getUTCDay.md')],
  ['getUTCFullYear()', 'getUTCFullYear', () => import(/* webpackChunkName: "docs/Date/getUTCFullYear" */ './docs/getUTCFullYear.md')],
  ['getUTCHours()', 'getUTCHours', () => import(/* webpackChunkName: "docs/Date/getUTCHours" */ './docs/getUTCHours.md')],
  ['getUTCMilliseconds()', 'getUTCMilliseconds', () => import(/* webpackChunkName: "docs/Date/getUTCMilliseconds" */ './docs/getUTCMilliseconds.md')],
  ['getUTCMinutes()', 'getUTCMinutes', () => import(/* webpackChunkName: "docs/Date/getUTCMinutes" */ './docs/getUTCMinutes.md')],
  ['getUTCMonth()', 'getUTCMonth', () => import(/* webpackChunkName: "docs/Date/getUTCMonth" */ './docs/getUTCMonth.md')],
  ['getUTCSeconds()', 'getUTCSeconds', () => import(/* webpackChunkName: "docs/Date/getUTCSeconds" */ './docs/getUTCSeconds.md')],
  ['getYear() [已废弃]', 'getYear', () => import(/* webpackChunkName: "docs/Date/getYear" */ './docs/getYear.md')],

  'Setter方法',
  ['setDate()', 'setDate', () => import(/* webpackChunkName: "docs/Date/setDate" */ './docs/setDate.md')],
  ['setFullYear()', 'setFullYear', () => import(/* webpackChunkName: "docs/Date/setFullYear" */ './docs/setFullYear.md')],
  ['setHours()', 'setHours', () => import(/* webpackChunkName: "docs/Date/setHours" */ './docs/setHours.md')],
  ['setMilliseconds()', 'setMilliseconds', () => import(/* webpackChunkName: "docs/Date/setMilliseconds" */ './docs/setMilliseconds.md')],
  ['setMinutes()', 'setMinutes', () => import(/* webpackChunkName: "docs/Date/setMinutes" */ './docs/setMinutes.md')],
  ['setMonth()', 'setMonth', () => import(/* webpackChunkName: "docs/Date/setMonth" */ './docs/setMonth.md')],
  ['setSeconds()', 'setSeconds', () => import(/* webpackChunkName: "docs/Date/setSeconds" */ './docs/setSeconds.md')],
  ['setTime()', 'setTime', () => import(/* webpackChunkName: "docs/Date/setTime" */ './docs/setTime.md')],
  ['setUTCDate()', 'setUTCDate', () => import(/* webpackChunkName: "docs/Date/setUTCDate" */ './docs/setUTCDate.md')],
  ['setUTCFullYear()', 'setUTCFullYear', () => import(/* webpackChunkName: "docs/Date/setUTCFullYear" */ './docs/setUTCFullYear.md')],
  ['setUTCHours()', 'setUTCHours', () => import(/* webpackChunkName: "docs/Date/setUTCHours" */ './docs/setUTCHours.md')],
  ['setUTCMilliseconds()', 'setUTCMilliseconds', () => import(/* webpackChunkName: "docs/Date/setUTCMilliseconds" */ './docs/setUTCMilliseconds.md')],
  ['setUTCMinutes()', 'setUTCMinutes', () => import(/* webpackChunkName: "docs/Date/setUTCMinutes" */ './docs/setUTCMinutes.md')],
  ['setUTCMonth()', 'setUTCMonth', () => import(/* webpackChunkName: "docs/Date/setUTCMonth" */ './docs/setUTCMonth.md')],
  ['setUTCSeconds()', 'setUTCSeconds', () => import(/* webpackChunkName: "docs/Date/setUTCSeconds" */ './docs/setUTCSeconds.md')],
  ['setYear() [已废弃]', 'setYear', () => import(/* webpackChunkName: "docs/Date/setYear" */ './docs/setYear.md')],

  'Conversion getter',
  ['toDateString()', 'toDateString', () => import(/* webpackChunkName: "docs/Date/toDateString" */ './docs/toDateString.md')],
  ['toISOString()', 'toISOString', () => import(/* webpackChunkName: "docs/Date/toISOString" */ './docs/toISOString.md')],
  ['toJSON()', 'toJSON', () => import(/* webpackChunkName: "docs/Date/toJSON" */ './docs/toJSON.md')],
  ['toLocaleDateString()', 'toLocaleDateString', () => import(/* webpackChunkName: "docs/Date/toLocaleDateString" */ './docs/toLocaleDateString.md')],
  ['toLocaleString()', null, null],
  ['toLocaleTimeString()', null, null],
  ['toString()', null, null],
  ['toTimeString()', null, null],
  ['toUTCString()', null, null],
  ['valueOf()', null, null],
  ['toGMTString() [已废弃]', null, null],
  ['toLocaleFormat() [非标准]', null, () => null],
  ['toSource() [非标准]', null, null]
];
