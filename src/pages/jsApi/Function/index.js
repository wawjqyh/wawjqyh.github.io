import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

const prefix = '/jsApi/function/';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'JS API 目录', url: '/jsApi' }, { name: 'Function 目录' }]} />

        <div className="title">Function</div>
        <div className="desc">
          Function 构造函数 创建一个新的Function对象。 在 JavaScript 中,
          每个函数实际上都是一个Function对象
        </div>

        <div className="content">
          <div className="col">
            <Card
              title="属性"
              desc="全局的Function对象没有自己的属性和方法, 但是, 因为它本身也是函数，所以它也会通过原型链从Function.prototype上继承部分属性和方法"
              prefix={prefix}
              items={[
                { name: 'Function.length', link: 'length', desc: '获取函数的接收参数个数' },
                {
                  name: 'Function.prototype.constructor',
                  desc: '声明函数的原型构造方法，详细请参考 Object.constructor'
                },
                {
                  name: 'Function.arguments [已废弃]',
                  desc: '以数组形式获取传入函数的所有参数。此属性已被arguments替代'
                },
                {
                  name: 'Function.arity [已删除]',
                  desc: '用于指定的函数的参数的个数，但已被删除。使用length属性代替'
                },
                { name: 'Function.caller [非标准]', desc: '获取调用函数的具体对象' },
                { name: 'Function.name [非标准]', desc: '获取函数的名称' },
                { name: 'Function.displayName [非标准]', desc: '获取函数的display name' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="方法"
              prefix={prefix}
              items={[
                {
                  name: 'Function.prototype.call()',
                  link: 'call',
                  desc: '在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入'
                },
                {
                  name: 'Function.prototype.apply()',
                  link: 'apply',
                  desc: '在一个对象的上下文中应用另一个对象的方法；参数能够以数组形式传入'
                },
                {
                  name: 'Function.prototype.bind()',
                  link: 'bind',
                  desc:
                    'bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 bind()方法的第一个参数作为 this,传入 bind()方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数'
                },
                {
                  name: 'Function.prototype.toString()',
                  link: 'toString',
                  desc: '获取函数的实现源码的字符串。覆盖了 Object.prototype.toString 方法'
                },
                {
                  name: 'Function.prototype.isGenerator() [非标准]',
                  desc: '若函数对象为generator，返回true，反之返回 false'
                },
                {
                  name: 'Function.prototype.toSource() [非标准]',
                  desc: '获取函数的实现源码的字符串。 覆盖了 Object.prototype.toSource 方法'
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
