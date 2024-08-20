import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

const prefix = '/jsApi/String/';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'JS API 目录', url: '/jsApi' }, { name: 'String 目录' }]} />

        <div className="title">String</div>
        <div className="desc">String 全局对象是一个用于字符串或一个字符序列的构造函数</div>

        <div className="content">
          <div className="col">
            <Card
              title="属性"
              prefix={prefix}
              items={[
                {
                  name: 'String.prototype',
                  link: 'prototype',
                  desc: '可以为 String 对象增加新的属性'
                }
              ]}
            />

            <Card
              title="实例属性"
              prefix={prefix}
              items={[
                {
                  name: 'String.prototype.constructor',
                  link: 'constructor',
                  desc: '用于创造对象的原型对象的特定的函数'
                },
                { name: 'String.prototype.length', link: 'length', desc: '返回了字符串的长度' }
              ]}
            />

            <Card
              title="方法"
              prefix={prefix}
              items={[
                {
                  name: 'String.fromCharCode()',
                  link: 'fromCharCode',
                  desc: '通过一串 Unicode 创建字符串'
                },
                {
                  name: 'String.fromCodePoint() [es6]',
                  link: 'fromCodePoint',
                  desc: '通过一串 码点 创建字符串'
                },
                { name: 'String.raw() [es6]', link: 'raw', desc: '通过模板字符串穿创建字符串' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="实例方法"
              prefix={prefix}
              items={[
                { name: 'charAt()', link: 'charAt', desc: '返回特定位置的字符' },
                {
                  name: 'charCodeAt()',
                  link: 'charCodeAt',
                  desc: '返回表示给定索引的字符的Unicode的值'
                },
                {
                  name: 'codePointAt() [es6]',
                  link: 'codePointAt',
                  desc: '返回使用UTF-16编码的给定位置的值的非负整数'
                },
                {
                  name: 'concat()',
                  link: 'concat',
                  desc: '连接两个字符串文本，并返回一个新的字符串'
                },
                {
                  name: 'includes() [es6]',
                  link: 'includes',
                  desc: '判断一个字符串里是否包含其他字符串'
                },
                {
                  name: 'endsWith() [es6]',
                  link: 'endsWith',
                  desc: '判断一个字符串的结尾是否包含其他字符串中的字符'
                },
                {
                  name: 'indexOf()',
                  link: 'indexOf',
                  desc: '从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1'
                },
                {
                  name: 'lastIndexOf()',
                  link: 'lastIndexOf',
                  desc: '从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1'
                },
                {
                  name: 'localeCompare()',
                  link: 'localeCompare',
                  desc:
                    '返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同'
                },
                { name: 'match()', link: 'match', desc: '使用正则表达式与字符串相比较' },
                {
                  name: 'normalize() [es6]',
                  link: 'normalize',
                  desc: '返回调用字符串值的Unicode标准化形式'
                },
                {
                  name: 'repeat() [es6]',
                  link: 'repeat',
                  desc: '返回指定重复次数的由元素组成的字符串对象'
                },
                {
                  name: 'replace()',
                  link: 'replace',
                  desc: '被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串'
                },
                {
                  name: 'search()',
                  link: 'search',
                  desc: '对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标'
                },
                { name: 'slice()', link: 'slice', desc: '摘取一个字符串区域，返回一个新的字符串' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="实例方法"
              prefix={prefix}
              items={[
                {
                  name: 'split()',
                  link: 'split',
                  desc: '通过分离字符串成字串，将字符串对象分割成字符串数组'
                },
                {
                  name: 'startsWith() [es6]',
                  link: 'startsWith',
                  desc: '判断字符串的起始位置是否匹配其他字符串中的字符'
                },
                {
                  name: 'substr()',
                  link: 'substr',
                  desc: '通过指定字符数返回在指定位置开始的字符串中的字符'
                },
                {
                  name: 'substring()',
                  link: 'substring',
                  desc: '返回在字符串中指定另个下标之间的字符'
                },
                {
                  name: 'toLocaleLowerCase()',
                  link: 'toLocaleLowerCase',
                  desc:
                    '根据当前区域设置，将符串中的字符转换成小写。对于大多数语言来说，toLowerCase的返回值是一致的'
                },
                {
                  name: 'toLocaleUpperCase()',
                  link: 'toLocaleUpperCase',
                  desc:
                    '根据当前区域设置，将字符串中的字符转换成大写，对于大多数语言来说，toUpperCase的返回值是一致的'
                },
                { name: 'toLowerCase()', link: 'toLowerCase', desc: '将字符串转换成小写并返回' },
                {
                  name: 'toString()',
                  link: 'toString',
                  desc: '返回用字符串表示的特定对象。重写 Object.prototype.toString 方法'
                },
                { name: 'toUpperCase()', link: 'toUpperCase', desc: '将字符串转换成大写并返回' },
                {
                  name: 'trim()',
                  link: 'trim',
                  desc: '从字符串的开始和结尾去除空格。参照部分 ECMAScript 5 标准'
                },
                {
                  name: 'valueOf()',
                  link: 'valueOf',
                  desc: '返回特定对象的原始值。重写 Object.prototype.valueOf 方法'
                },
                {
                  name: 'toSource() [非标准]',
                  link: 'toSource',
                  desc:
                    '返回一个对象文字代表着特定的对象。你可以使用这个返回值来创建新的对象。重写 Object.prototype.toSource 方法'
                },
                {
                  name: 'quote() [非标准]',
                  link: 'quote',
                  desc: 'Wraps the string in double quotes (""")'
                },
                { name: 'trimLeft() [非标准]', link: 'trimLeft', desc: '从字符串的左侧去除空格' },
                { name: 'trimRight() [非标准]', link: 'trimRight', desc: '从字符串的右侧去除空格' }
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
