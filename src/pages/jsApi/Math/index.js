import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

const prefix = '/jsApi/Math/';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'JS API 目录', url: '/jsApi' }, { name: 'Math 目录' }]} />

        <div className="title">Math</div>
        <div className="desc">
          与其它全局对象不同的是, Math 不是一个构造器. Math 的所有属性和方法都是静态的.
          你用到的常数pi可以用 Math.PI 表示,用 x 作参数 Math.sin(x) 调用 sin 函数. JavaScript
          中的常数, 是以全精度的实数定义的.
        </div>

        <div className="content">
          <div className="col">
            <Card
              title="属性"
              prefix={prefix}
              items={[
                { name: 'Math.E', link: 'E', desc: '欧拉常数，也是自然对数的底数, 约等于 2.718' },
                { name: 'Math.LN2', link: 'LN2', desc: '2的自然对数, 约等于0.693' },
                { name: 'Math.LN10', link: 'LN10', desc: '10的自然对数, 约等于 2.303' },
                { name: 'Math.LOG2E', link: 'LOG2E', desc: '以2为底E的对数, 约等于 1.443' },
                { name: 'Math.LOG10E', link: 'LOG10E', desc: '以10为底E的对数, 约等于 0.434' },
                {
                  name: 'Math.PI',
                  link: 'PI',
                  desc: '圆周率，一个圆的周长和直径之比，约等于 3.14159'
                },
                { name: 'Math.SQRT1_2', link: 'SQRT1_2', desc: '1/2的平方根, 约等于 0.707' },
                { name: 'Math.SQRT2', link: 'SQRT2', desc: '2的平方根,约等于 1.414' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="方法"
              prefix={prefix}
              items={[
                { name: 'Math.abs(x)', link: 'abs', desc: '绝对值' },
                { name: 'Math.acos(x)', link: 'acos', desc: '反余弦值' },
                { name: 'Math.acosh(x) [es6]', link: 'acosh', desc: '反双曲余弦值' },
                { name: 'Math.asin(x)', link: 'asin', desc: '反正弦值' },
                { name: 'Math.asinh(x) [es6]', link: 'asinh', desc: '反双曲正弦值' },
                {
                  name: 'Math.atan(x)',
                  link: 'atan',
                  desc: '以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值'
                },
                { name: 'Math.atanh(x) [es6]', link: 'atanh', desc: '反双曲正切值' },
                { name: 'Math.atan2(x, y)', link: 'atan2', desc: 'y/x 的反正切值' },
                { name: 'Math.cbrt(x) [es6]', link: 'cbrt', desc: '立方根' },
                { name: 'Math.ceil(x)', link: 'ceil', desc: '向上取整' },
                {
                  name: 'Math.clz32(x) [es6]',
                  link: 'clz32',
                  desc: '返回一个数字在转换成 32 无符号整形数字的二进制形式后, 开头的 0 的个数'
                },
                { name: 'Math.cos(x)', link: 'cos', desc: '余弦值' },
                { name: 'Math.cosh(x) [es6]', link: 'cosh', desc: '双曲余弦值' },
                {
                  name: 'Math.exp(x)',
                  link: 'exp',
                  desc: '返回 Ex, 当x为参数, E 是欧拉常数 (2.718...), 自然对数的底'
                },
                { name: 'Math.expm1(x) [es6]', link: 'expm1', desc: 'exp(x)-1 的值' },
                { name: 'Math.floor(x)', link: 'floor', desc: '向下取整' },
                {
                  name: 'Math.fround(x) [es6]',
                  link: 'fround',
                  desc: '将任意的数字转换为离它最近的单精度浮点数形式的数字'
                },
                {
                  name: 'Math.hypot([x[,y[,…]]]) [es6]',
                  link: 'hypot',
                  desc: '返回它的所有参数的平方和的平方根'
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
                  name: 'Math.imul(x) [es6]',
                  link: 'imul',
                  desc: '返回两个参数的类C的32位整数乘法运算的运算结果'
                },
                { name: 'Math.log(x)', link: 'log', desc: '返回一个数的自然对数' },
                { name: 'Math.log1p(x) [es6]', link: 'log1p', desc: '返回一个数的自然对数' },
                {
                  name: 'Math.log10(x) [es6]',
                  link: 'log10',
                  desc: '返回一个数字以 10 为底的对数'
                },
                { name: 'Math.log2(x) [es6]', link: 'log2', desc: '返回一个数字以 2 为底的对数' },
                { name: 'Math.max([x[,y[,…]]])', link: 'max', desc: '返回0个到多个数值中最大值' },
                { name: 'Math.min([x[,y[,…]]])', link: 'min', desc: '返回0个到多个数值中最小值' },
                { name: 'Math.pow(x,y)', link: 'pow', desc: '返回x的y次幂' },
                { name: 'Math.random()', link: 'random', desc: '返回0到1之间的伪随机数' },
                { name: 'Math.round(x)', link: 'round', desc: '返回四舍五入后的整数' },
                {
                  name: 'Math.sign(x) [es6]',
                  link: 'sign',
                  desc: '返回x的符号函数, 判定x是正数,负数还是0'
                },
                { name: 'Math.sin(x)', link: 'sin', desc: '返回正弦值' },
                { name: 'Math.sinh(x) [es6]', link: 'sinh', desc: '返回x的双曲正弦值' },
                { name: 'Math.sqrt(x)', link: 'sqrt', desc: '返回x的平方根' },
                { name: 'Math.tan(x)', link: 'tan', desc: '返回x的正切值' },
                { name: 'Math.tanh(x) [es6]', link: 'tanh', desc: '返回x的双曲正切值' },
                { name: 'Math.toSource()', link: 'toSource', desc: '返回字符串 "Math"' },
                { name: 'Math.trunc(x) [es6]', link: 'trunc', desc: '返回x的整数部分,去除小数' }
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
