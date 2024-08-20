import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

const prefix = '/jsApi/Date/';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'JS API 目录', url: '/jsApi' }, { name: 'Date 目录' }]} />

        <div className="title">Date</div>

        <div className="desc">
          创建 Date 实例用来处理日期和时间。Date 对象基于1970年1月1日（世界标准时间）起的毫秒数
        </div>

        <div className="content">
          <div className="col">
            <Card
              title="属性"
              prefix={prefix}
              items={[
                { name: 'Date.prototype', link: 'prototype', desc: '允许为 Date 实例对象添加属性' },
                {
                  name: 'Date.length',
                  link: 'length',
                  desc: 'Date.length 的值是 7。这是该构造函数可接受的参数个数'
                }
              ]}
            />
            <Card
              title="Conversion getter"
              prefix={prefix}
              items={[
                {
                  name: 'toDateString()',
                  link: 'toDateString',
                  desc: '以人类易读（human-readable）的形式返回该日期对象日期部分的字符串'
                },
                {
                  name: 'toISOString()',
                  link: 'toISOString',
                  desc: '把一个日期转换为符合 ISO 8601 扩展格式的字符串'
                },
                {
                  name: 'toJSON()',
                  link: 'toJSON',
                  desc:
                    '使用 toISOString() 返回一个表示该日期的字符串。为了在 JSON.stringify() 方法中使用'
                },
                {
                  name: 'toLocaleDateString()',
                  link: 'toLocaleDateString',
                  desc:
                    '返回一个表示该日期对象日期部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）'
                },
                {
                  name: 'toLocaleString()',
                  link: 'toLocaleString',
                  desc:
                    '返回一个表示该日期对象的字符串，该字符串与系统设置的地区关联（locality sensitive）。覆盖了 Object.prototype.toLocaleString() 方法'
                },
                {
                  name: 'toLocaleTimeString()',
                  link: 'toLocaleTimeString',
                  desc:
                    '返回一个表示该日期对象时间部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）'
                },
                {
                  name: 'toString()',
                  link: 'toString',
                  desc: '返回一个表示该日期对象的字符串。覆盖了Object.prototype.toString() 方法'
                },
                {
                  name: 'toTimeString()',
                  link: 'toTimeString',
                  desc: '以人类易读格式返回日期对象时间部分的字符串'
                },
                {
                  name: 'toUTCString()',
                  link: 'toUTCString',
                  desc: '把一个日期对象转换为一个以UTC时区计时的字符串'
                },
                {
                  name: 'valueOf()',
                  link: 'valueOf',
                  desc: '返回一个日期对象的原始值。覆盖了 Object.prototype.valueOf() 方法'
                },
                {
                  name: 'toGMTString() [已废弃]',
                  link: 'toGMTString',
                  desc:
                    '返回一个基于 GMT (UT) 时区的字符串来表示该日期。请使用 toUTCString() 方法代替'
                },
                {
                  name: 'toLocaleFormat() [非标准]',
                  link: 'toLocaleFormat',
                  desc: '使用格式字符串将日期转换为字符串'
                },
                {
                  name: 'toSource() [非标准]',
                  link: 'toSource',
                  desc:
                    '返回一个与Date等价的原始字符串对象，你可以使用这个值去生成一个新的对象。重写了 Object.prototype.toSource() 这个方法'
                }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="方法"
              prefix={prefix}
              items={[
                {
                  name: 'Date.now()',
                  link: 'now',
                  desc: '返回自 1970-1-1 00:00:00  UTC (世界标准时间)至今所经过的毫秒数'
                },
                {
                  name: 'Date.parse()',
                  link: 'parse',
                  desc: '解析一个表示日期的字符串，并返回从 1970-1-1 00:00:00 所经过的毫秒数'
                },
                {
                  name: 'Date.UTC()',
                  link: 'UTC',
                  desc:
                    '接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 1970-01-01 00:00:00 UTC 开始所经过的毫秒数'
                }
              ]}
            />

            <Card
              title="Setter方法"
              prefix={prefix}
              items={[
                {
                  name: 'setDate()',
                  link: 'setDate',
                  desc: '根据本地时间为指定的日期对象设置月份中的第几天'
                },
                {
                  name: 'setFullYear()',
                  link: 'setFullYear',
                  desc: '根据本地时间为指定日期对象设置完整年份（四位数年份是四个数字）'
                },
                {
                  name: 'setHours()',
                  link: 'setHours',
                  desc: '根据本地时间为指定日期对象设置小时数'
                },
                {
                  name: 'setMilliseconds()',
                  link: 'setMilliseconds',
                  desc: '根据本地时间为指定日期对象设置毫秒数'
                },
                {
                  name: 'setMinutes()',
                  link: 'setMinutes',
                  desc: '根据本地时间为指定日期对象设置分钟数'
                },
                {
                  name: 'setMonth()',
                  link: 'setMonth',
                  desc: '根据本地时间为指定日期对象设置月份'
                },
                {
                  name: 'setSeconds()',
                  link: 'setSeconds',
                  desc: '根据本地时间为指定日期对象设置秒数'
                },
                {
                  name: 'setTime()',
                  link: 'setTime',
                  desc:
                    '通过指定从 1970-1-1 00:00:00 UTC 开始经过的毫秒数来设置日期对象的时间，对于早于 1970-1-1 00:00:00 UTC的时间可使用负值'
                },
                {
                  name: 'setUTCDate()',
                  link: 'setUTCDate',
                  desc: '根据世界时设置 Date 对象中月份的一天 (1 ~ 31)'
                },
                {
                  name: 'setUTCFullYear()',
                  link: 'setUTCFullYear',
                  desc: '根据世界时设置 Date 对象中的年份（四位数字）'
                },
                {
                  name: 'setUTCHours()',
                  link: 'setUTCHours',
                  desc: '根据世界时设置 Date 对象中的小时 (0 ~ 23)'
                },
                {
                  name: 'setUTCMilliseconds()',
                  link: 'setUTCMilliseconds',
                  desc: '根据世界时设置 Date 对象中的毫秒 (0 ~ 999)'
                },
                {
                  name: 'setUTCMinutes()',
                  link: 'setUTCMinutes',
                  desc: '根据世界时设置 Date 对象中的分钟 (0 ~ 59)'
                },
                {
                  name: 'setUTCMonth()',
                  link: 'setUTCMonth',
                  desc: '根据世界时设置 Date 对象中的月份 (0 ~ 11)'
                },
                {
                  name: 'setUTCSeconds()',
                  link: 'setUTCSeconds',
                  desc: '根据世界时设置 Date 对象中的秒钟 (0 ~ 59)'
                },
                {
                  name: 'setYear() [已废弃]',
                  link: 'setYear',
                  desc: 'setYear() 方法用于设置年份。请使用 setFullYear() 方法代替'
                }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="Getter方法"
              prefix={prefix}
              items={[
                {
                  name: 'getDate()',
                  link: 'getDate',
                  desc: '根据本地时间返回指定日期对象的月份中的第几天（1-31）'
                },
                {
                  name: 'getDay()',
                  link: 'getDay',
                  desc: '根据本地时间返回指定日期对象的星期中的第几天（0-6）'
                },
                {
                  name: 'getFullYear()',
                  link: 'getFullYear',
                  desc: '根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）'
                },
                {
                  name: 'getHours()',
                  link: 'getHours',
                  desc: '根据本地时间返回指定日期对象的小时（0-23）'
                },
                {
                  name: 'getMilliseconds()',
                  link: 'getMilliseconds',
                  desc: '根据本地时间返回指定日期对象的微秒（0-999）'
                },
                {
                  name: 'getMinutes()',
                  link: 'getMinutes',
                  desc: '根据本地时间返回指定日期对象的分钟（0-59）'
                },
                {
                  name: 'getMonth()',
                  link: 'getMonth',
                  desc: '根据本地时间返回指定日期对象的月份（0-11）'
                },
                {
                  name: 'getSeconds()',
                  link: 'getSeconds',
                  desc: '根据本地时间返回指定日期对象的秒数（0-59）'
                },
                {
                  name: 'getTime()',
                  link: 'getTime',
                  desc:
                    '返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，对于1970-1-1 00:00:00 UTC之前的时间返回负值'
                },
                {
                  name: 'getTimezoneOffset()',
                  link: 'getTimezoneOffset',
                  desc: '返回当前时区的时区偏移'
                },
                {
                  name: 'getUTCDate()',
                  link: 'getUTCDate',
                  desc: '根据世界时间返回一个指定的日期对象为一个月中的第几天'
                },
                {
                  name: 'getUTCDay()',
                  link: 'getUTCDay',
                  desc: '根据世界时间返回一个指定的日期对象为一星期中的第几天，其中 0 代表星期天'
                },
                {
                  name: 'getUTCFullYear()',
                  link: 'getUTCFullYear',
                  desc: '根据世界时间返回一个指定的日期对象的年份'
                },
                {
                  name: 'getUTCHours()',
                  link: 'getUTCHours',
                  desc: '根据世界时间返回一个指定的日期对象的小时数（0-23）'
                },
                {
                  name: 'getUTCMilliseconds()',
                  link: 'getUTCMilliseconds',
                  desc: '根据世界时间返回一个指定的日期对象的毫秒数（0-999）'
                },
                {
                  name: 'getUTCMinutes()',
                  link: 'getUTCMinutes',
                  desc: '根据世界时间返回一个指定的日期对象的分钟数（0-59）'
                },
                {
                  name: 'getUTCMonth()',
                  link: 'getUTCMonth',
                  desc: '根据世界时间返回一个指定的日期对象的月份（0-11）'
                },
                {
                  name: 'getUTCSeconds()',
                  link: 'getUTCSeconds',
                  desc: '根据世界时间返回一个指定的日期对象的秒数（0-59）'
                },
                { name: 'getYear() [已废弃]', link: 'getYear', desc: '返回年份后两位' }
              ]}
            />
          </div>
        </div>

        <FootImg group={3} />
      </div>
    );
  }
}

export default Index;
