import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

const prefix = '/jsApi/Array/';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'JS API 目录', url: '/jsApi' }, { name: 'Array 目录' }]} />

        <div className="title">Array</div>
        <div className="desc">
          JavaScript 数组对象是一个用于构造数组的全局对象; 它们是高级的，列表式的对象。
        </div>

        <div className="content">
          <div className="col">
            <Card
              title="属性"
              prefix={prefix}
              items={[
                {
                  name: 'Array.length',
                  link: 'length',
                  desc: 'Array 构造函数的 length 属性，其值为1'
                },
                { name: 'Array.prototype', link: 'prototype', desc: '允许为所有数组对象附加属性' },
                {
                  name: 'Array.prototype[@@unscopables]',
                  link: 'unscopables',
                  desc:
                    'Symbol属性 @@unscopable 包含了所有 ES2015 (ES6) 中新定义的且并未被更早的 ECMAScript标准收纳的属性名'
                }
              ]}
            />
            <Card
              title="不会改变自身的方法"
              desc="下面的这些方法绝对不会改变调用它们的对象的值，只会返回一个新的数组或者返回一个其它的期望值"
              prefix={prefix}
              items={[
                {
                  name: 'concat()',
                  link: 'concat',
                  desc: '返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组'
                },
                {
                  name: 'includes() [es6]',
                  link: 'includes',
                  desc: '判断当前数组是否包含某指定的值，如果是返回 true，否则返回 false'
                },
                { name: 'join()', link: 'join', desc: '连接所有数组元素组成一个字符串' },
                {
                  name: 'slice()',
                  link: 'slice',
                  desc: '抽取当前数组中的一段元素组合成一个新数组'
                },
                {
                  name: 'toString()',
                  link: 'toString',
                  desc:
                    '返回一个由所有数组元素组合而成的字符串。遮蔽了原型链上的 Object.prototype.toString() 方法'
                },
                {
                  name: 'toLocaleString() [草案]',
                  link: 'toLocaleString',
                  desc:
                    '返回一个由所有数组元素组合而成的本地化后的字符串。遮蔽了原型链上的 Object.prototype.toLocaleString() 方法'
                },
                {
                  name: 'indexOf()',
                  link: 'indexOf',
                  desc: '返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1'
                },
                {
                  name: 'lastIndexOf()',
                  link: 'lastIndexOf',
                  desc:
                    '返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1'
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
                  name: 'Array.from() [es6]',
                  link: 'from',
                  desc: '从类数组或者迭代对象（iterable object）中创建一个新的数组实例'
                },
                {
                  name: 'Array.isArray()',
                  link: 'isArray',
                  desc: '假如一个变量是数组则返回true，否则返回false'
                },
                {
                  name: 'Array.observe() [已废弃]',
                  link: 'observe',
                  desc:
                    '异步监视数组的修改情况，与对象的Object.observe()方法类似。该方法会根据修改事件发生顺序提供一个修改流'
                },
                {
                  name: 'Array.unobserve() [已废弃]',
                  link: 'unobserve',
                  desc: '用来移除Array.observe()设置的所有观察者'
                },
                {
                  name: 'Array.of() [es6]',
                  link: 'of',
                  desc:
                    '创建一个有可变数量的参数的新的数组实例，无论参数有多少数量，而且可以是任意类型'
                }
              ]}
            />

            <Card
              title="会改变自身的方法"
              desc="下面的这些方法会改变调用它们的对象自身的值"
              prefix={prefix}
              items={[
                {
                  name: 'copyWithin() [es6]',
                  link: 'copyWithin',
                  desc: '在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值'
                },
                {
                  name: 'fill() [es6]',
                  link: 'fill',
                  desc: '将数组中指定区间的所有元素的值，都替换成某个固定的值'
                },
                { name: 'pop()', link: 'pop', desc: '删除数组的最后一个元素，并返回这个元素' },
                {
                  name: 'push()',
                  link: 'push',
                  desc: '在数组的末尾增加一个或多个元素，并返回数组的新长度'
                },
                {
                  name: 'reverse()',
                  link: 'reverse',
                  desc:
                    '颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个'
                },
                { name: 'shift()', link: 'shift', desc: '删除数组的第一个元素，并返回这个元素' },
                {
                  name: 'unshift()',
                  link: 'unshift',
                  desc: '在数组的开头增加一个或多个元素，并返回数组的新长度'
                },
                { name: 'sort()', link: 'sort', desc: '对数组元素进行排序，并返回当前数组' },
                { name: 'splice()', link: 'splice', desc: '在任意的位置给数组添加或删除任意个元素' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="遍历方法"
              desc="遍历方法中，有很多方法都需要指定一个回调函数作为参数。在回调函数执行之前，数组的长度会被缓存在某个地方，所以，如果你在回调函数中为当前数组添加了新的元素，那么那些新添加的元素是不会被遍历到的。"
              prefix={prefix}
              items={[
                { name: 'forEach()', link: 'forEach', desc: '为数组中的每个元素执行一次回调函数' },
                {
                  name: 'entries() [es6]',
                  link: 'entries',
                  desc: '返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对'
                },
                {
                  name: 'every()',
                  link: 'every',
                  desc: '如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false'
                },
                {
                  name: 'some()',
                  link: 'some',
                  desc: '如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false'
                },
                {
                  name: 'filter()',
                  link: 'filter',
                  desc: '将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回'
                },
                {
                  name: 'find() [es6]',
                  link: 'find',
                  desc:
                    '找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined'
                },
                {
                  name: 'findIndex() [es6]',
                  link: 'findIndex',
                  desc: '找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1'
                },
                {
                  name: 'keys() [es6]',
                  link: 'keys',
                  desc: '返回一个数组迭代器对象，该迭代器会包含所有数组元素的键'
                },
                { name: 'map()', link: 'map', desc: '返回一个由回调函数的返回值组成的新数组' },
                {
                  name: 'reduce()',
                  link: 'reduce',
                  desc:
                    '从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值'
                },
                {
                  name: 'reduceRight()',
                  link: 'reduceRight',
                  desc:
                    '从右到左为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值'
                },
                {
                  name: 'values() [es6]',
                  link: 'values',
                  desc: '返回一个数组迭代器对象，该迭代器会包含所有数组元素的值'
                },
                {
                  name: 'Array.prototype[@@iterator]() [es6]',
                  link: 'iterator',
                  desc: '和上面的 values() 方法是同一个函数'
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
