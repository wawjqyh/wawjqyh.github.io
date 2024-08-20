import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

const prefix = '/jsApi/object/';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'JS API 目录', url: '/jsApi' }, { name: 'Object 目录' }]} />

        <div className="title">Object</div>
        <div className="desc">Object 构造函数创建一个对象包装器</div>

        <div className="content">
          <div className="col">
            <Card
              title="属性"
              prefix={prefix}
              items={[
                { name: 'Object.length', link: 'length', desc: '值为1' },
                {
                  name: 'Object.prototype',
                  link: 'prototype',
                  desc: '可以为所有 Object 类型的对象添加属性'
                }
              ]}
            />
            <Card
              title="方法"
              prefix={prefix}
              items={[
                {
                  name: 'Object.assign()',
                  link: 'assign',
                  desc: '通过复制一个或多个对象来创建一个新的对象'
                },
                {
                  name: 'Object.create()',
                  link: 'create',
                  desc: '指定原型对象和属性来创建一个新的对象'
                },
                {
                  name: 'Object.defineProperty()',
                  link: 'defineProperty',
                  desc: '给对象添加一个属性并指定该属性的配置'
                },
                {
                  name: 'Object.defineProperties()',
                  link: 'defineProperties',
                  desc: '给对象添加多个属性并分别指定它们的配置'
                },
                {
                  name: 'Object.getOwnPropertyDescriptor()',
                  link: 'getOwnPropertyDescriptor',
                  desc: '返回对象指定的属性配置'
                },
                {
                  name: 'Object.getOwnPropertyNames()',
                  link: 'getOwnPropertyNames',
                  desc: '返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名'
                },
                {
                  name: 'Object.getOwnPropertySymbols()',
                  link: 'getOwnPropertySymbols',
                  desc: '返回一个数组，它包含了指定对象自身所有的符号属性'
                },
                {
                  name: 'Object.getPrototypeOf()',
                  link: 'getPrototypeOf',
                  desc: '返回指定对象的原型对象'
                },
                { name: 'Object.setPrototypeOf()', link: 'setPrototypeOf', desc: '设置对象的原型' },
                {
                  name: 'Object.is()',
                  link: 'is',
                  desc: '判断两个值是否严格相等。（类似===运算符，但+0不等于-0，NaN等于自己）'
                },
                { name: 'Object.isExtensible()', link: 'isExtensible', desc: '判断对象是否可扩展' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="方法"
              prefix={prefix}
              items={[
                {
                  name: 'Object.freeze()',
                  link: 'freeze',
                  desc: '冻结对象：使对象不可删除或修改它的属性'
                },
                { name: 'Object.isFrozen()', link: 'isFrozen', desc: '判断对象是否已经冻结' },
                { name: 'Object.seal()', link: 'seal', desc: '密封对象以防删除' },
                { name: 'Object.isSealed()', link: 'isSealed', desc: '判断对象是否已经密封' },
                {
                  name: 'Object.keys()',
                  link: 'keys',
                  desc: '返回一个数组，包含指定对象的所有自有可遍历属性的名称'
                },
                {
                  name: 'Object.preventExtensions()',
                  link: 'preventExtensions',
                  desc: '阻止对象扩展'
                },
                {
                  name: 'Object.entries() [草案]',
                  link: 'entries',
                  desc: '返回一个数组，其是给定对象自身的 enumerable 属性键值对（[key, value]）'
                },
                {
                  name: 'Object.values() [草案]',
                  link: 'values',
                  desc: '返回一个数组，其是给定对象自身的 enumerable 属性值'
                }
              ]}
            />
            <Card
              title="实例属性"
              prefix={prefix}
              items={[
                {
                  name: 'Object.prototype.constructor',
                  link: 'constructor',
                  desc: '特定的函数，用于创建一个对象的原型'
                },
                {
                  name: 'Object.prototype.__proto__ [非标准]',
                  desc: '指向当对象被实例化的时候，用作原型的对象'
                },
                {
                  name: 'Object.prototype.__noSuchMethod__ [非标准]',
                  desc: '当未定义的对象成员被调用作方法的时候，允许定义并执行的函数'
                },
                {
                  name: 'Object.prototype.__count__ [已废弃]',
                  desc: '用于直接返回用户定义的对象中可数的属性的数量。已被废除'
                },
                {
                  name: 'Object.prototype.__parent__ [已废弃]',
                  desc: '用于指向对象的内容。已被废除'
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
                  name: 'Object.prototype.hasOwnProperty()',
                  link: 'hasOwnProperty',
                  desc: '返回一个布尔值，表示某个对象是否含有指定的属性，而且此属性非原型链继承的'
                },
                {
                  name: 'Object.prototype.isPrototypeOf()',
                  link: 'isPrototypeOf',
                  desc: '返回一个布尔值，表示指定的对象是否在本对象的原型链中'
                },
                {
                  name: 'Object.prototype.propertyIsEnumerable()',
                  link: 'propertyIsEnumerable',
                  desc: '判断指定属性是否可枚举，内部属性设置参见 ECMAScript DontEnum attribute'
                },
                {
                  name: 'Object.prototype.toLocaleString()',
                  link: 'toLocaleString',
                  desc: '直接调用 toString()方法'
                },
                {
                  name: 'Object.prototype.toString()',
                  link: 'toString',
                  desc: '返回对象的字符串表示'
                },
                {
                  name: 'Object.prototype.valueOf()',
                  link: 'valueOf',
                  desc: '返回指定对象的原始值'
                },
                {
                  name: 'Object.prototype.toSource() [非标准]',
                  link: 'toSource',
                  desc: '返回字符串表示此对象的源代码形式，可以使用此字符串生成一个新的相同的对象'
                },
                {
                  name: 'Object.prototype.unwatch() [非标准]',
                  link: 'unwatch',
                  desc: '移除对象某个属性的监听'
                },
                {
                  name: 'Object.prototype.watch() [非标准]',
                  link: 'watch',
                  desc: '给对象的某个属性增加监听'
                },
                {
                  name: 'Object.prototype.__defineGetter__() [已废弃]',
                  desc: '关联一个函数到一个属性。访问该函数时，执行该函数并返回其返回值'
                },
                {
                  name: 'Object.prototype.__defineSetter__() [已废弃]',
                  desc: '关联一个函数到一个属性。设置该函数时，执行该修改属性的函数'
                },
                {
                  name: 'Object.prototype.__lookupGetter__() [已废弃]',
                  desc: '返回使用 __defineGetter__ 定义的方法函数'
                },
                {
                  name: 'Object.prototype.__lookupSetter__() [已废弃]',
                  desc: '返回使用 __defineSetter__ 定义的方法函数'
                },
                {
                  name: 'Object.prototype.eval() [已废弃]',
                  desc: '在指定对象为上下文情况下执行javascript字符串代码，已经废弃'
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
