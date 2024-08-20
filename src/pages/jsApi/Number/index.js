import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

const prefix = '/jsApi/Number/';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'JS API 目录', url: '/jsApi' }, { name: 'Number 目录' }]} />

        <div className="title">Number</div>
        <div className="desc">
          JavaScript 的 Number 对象是经过封装的能让你处理数字值的对象。Number 对象由 Number()
          构造器创建
        </div>

        <div className="content">
          <div className="col">
            <Card
              title="属性"
              prefix={prefix}
              items={[
                {
                  name: 'Number.EPSILON [es6]',
                  link: 'EPSILON',
                  desc: '两个可表示(representable)数之间的最小间隔'
                },
                {
                  name: 'Number.MAX_SAFE_INTEGER [es6]',
                  link: 'MAX_SAFE_INTEGER',
                  desc: '在 JavaScript 中最大的安全整数 (253 - 1)'
                },
                {
                  name: 'Number.MAX_VALUE',
                  link: 'MAX_VALUE',
                  desc: '能表示的最大正数。最小的负数是 -MAX_VALUE'
                },
                {
                  name: 'Number.MIN_VALUE',
                  link: 'MIN_VALUE',
                  desc:
                    '能表示的最小正数即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 -MIN_VALUE'
                },
                { name: 'Number.NaN', link: 'NaN', desc: '特殊的“非数字”值' },
                {
                  name: 'Number.NEGATIVE_INFINITY',
                  link: 'NEGATIVE_INFINITY',
                  desc: '特殊的负无穷大值，在溢出时返回该值'
                },
                {
                  name: 'Number.POSITIVE_INFINITY',
                  link: 'POSITIVE_INFINITY',
                  desc: '特殊的正无穷大值，在溢出时返回改值'
                },
                { name: 'Number.prototype', link: '', desc: 'Number 对象上允许的额外属性' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="方法"
              prefix={prefix}
              items={[
                { name: 'Number.isNaN() [es6]', link: 'isNaN', desc: '确定传递的值是否是 NaN' },
                {
                  name: 'Number.isFinite() [es6]',
                  link: 'isFinite',
                  desc: '确定传递的值类型及本身是否是有限数'
                },
                {
                  name: 'Number.isInteger() [es6]',
                  link: 'isInteger',
                  desc: '确定传递的值类型是“number”，且是整数'
                },
                {
                  name: 'Number.isSafeInteger() [es6]',
                  link: 'isSafeInteger',
                  desc: '确定传递的值是否为安全整数 ( -(253 - 1) 至 253 - 1之间)'
                },
                {
                  name: 'Number.parseFloat() [es6]',
                  link: 'parseFloat',
                  desc: '和全局对象 parseFloat() 一样'
                },
                {
                  name: 'Number.parseInt() [es6]',
                  link: 'parseInt',
                  desc: '和全局对象 parseInt() 一样'
                },
                {
                  name: 'Number.toInteger() [已废弃]',
                  link: 'toInteger',
                  desc: '计算传递的值并将其转换为整数 (或无穷大)'
                }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="实例方法"
              prefix={prefix}
              items={[
                {
                  name: 'toExponential()',
                  link: 'toExponential',
                  desc: '返回一个使用指数表示法表示的该数值的字符串表示'
                },
                {
                  name: 'toFixed()',
                  link: 'toFixed',
                  desc: '返回一个使用定点表示法表示的该数值的字符串表示'
                },
                {
                  name: 'toLocaleString()',
                  link: 'toLocaleString',
                  desc:
                    '返回一个与语言相关的该数值对象的字符串表示。覆盖了Object.prototype.toLocaleString() 方法'
                },
                {
                  name: 'toPrecision()',
                  link: 'toPrecision',
                  desc: '使用定点表示法或指数表示法来表示的指定显示位数的该数值对象的字符串表示'
                },
                {
                  name: 'toString()',
                  link: 'toString',
                  desc: '返回一个表示该数值对象的字符串。覆盖了 Object.prototype.toString() 方法'
                },
                {
                  name: 'valueOf()',
                  link: 'valueOf',
                  desc: '返回该数值对象的原始值。覆盖了 Object.prototype.valueOf() 方法'
                },
                {
                  name: 'toSource() [非标准]',
                  link: 'toSource',
                  desc: '返回该对象源码的字符串表示'
                }
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
