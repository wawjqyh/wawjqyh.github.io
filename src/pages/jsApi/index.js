import React, { Component } from 'react';
import Card from '@/components/card';
import Header from '@/components/Header';
import FootImg from '@/components/FootImg';

class Index extends Component {
  render() {
    return (
      <div className="catalog">
        <Header nav={[{ name: 'JS API 目录' }]} />

        <div className="title">javascript内置对象</div>
        <div className="desc">
          这里的”全局对象“（global
          objects）（或者标准内置对象）指的是在全局作用域（globalscope）中的对象 （仅当未使用
          ECMAScript 5 严格模式时！否则只会得到undefined）。全局对象本身可通过 this
          操作符在全局作用域中获得。实际上，全局作用域就是由全局对象的各个属性组成的（包括继承来的属性）。在全局作用域中的其他对象，要么是用户自己创建的，要么是宿主应用提供的。
        </div>

        <div className="content">
          <div className="col">
            <Card
              title="值属性"
              desc="这些全局属性返回一个简单的值；他们没有属性和方法"
              prefix="/jsApi/valueProperty/"
              items={[
                { name: 'Infinity', link: 'Infinity' },
                { name: 'NaN', link: 'NaN' },
                { name: 'undefined', link: 'undefined' },
                { name: 'null', link: 'null' }
              ]}
            />

            <Card
              title="结构化数据"
              desc="这种数据类型可以用来表示结构化数据缓存或者JSON数据，并允许与其进行交互"
              items={[
                { name: 'ArrayBuffer' },
                { name: 'SharedArrayBuffer[草案]' },
                { name: 'Atomics[草案]' },
                { name: 'DataView' },
                { name: 'JSON' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="函数属性"
              desc="执行特定功能并返回结果的全局方法"
              prefix="/jsApi/functionProperty/"
              items={[
                { name: 'eval()', link: 'eval' },
                { name: 'uneval()[非标准]', link: 'uneval' },
                { name: 'isFinite()', link: 'isFinite' },
                { name: 'isNaN()', link: 'isNaN' },
                { name: 'parseFloat()', link: 'parseFloat' },
                { name: 'parseInt()', link: 'parseInt' },
                { name: 'encodeURI()', link: 'encodeURI' },
                { name: 'decodeURI()', link: 'decodeURI' },
                { name: 'encodeURIComponent()', link: 'encodeURIComponent' },
                { name: 'decodeURIComponent()', link: 'decodeURIComponent' },
                { name: 'escape()[已丢弃]', link: 'escape' },
                { name: 'unescape()[已丢弃]', link: 'unescape' }
              ]}
            />

            <Card
              title="控制抽象对象"
              desc="控制抽象对象"
              items={[
                { name: 'Promise' },
                { name: 'Generator' },
                { name: 'GeneratorFunction' },
                { name: 'AsyncFunction[草案]' }
              ]}
            />
          </div>

          <div className="col">
            <Card
              title="基本对象"
              desc="基础的语言对象、方法对象和错误对象"
              prefix="/jsApi/"
              items={[
                { name: 'Object', link: 'object' },
                { name: 'Function', link: 'Function' },
                { name: 'Boolean', link: 'Boolean/Boolean' },
                { name: 'Symbol' },
                { name: 'Error' },
                { name: 'EvalError' },
                { name: 'InternalError' },
                { name: 'RangeError' },
                { name: 'ReferenceError' },
                { name: 'SyntaxError' },
                { name: 'TypeError' },
                { name: 'URIError' }
              ]}
            />

            <Card title="反射" desc="反射" items={[{ name: 'Reflect' }, { name: 'Proxy' }]} />
          </div>

          <div className="col">
            <Card
              title="数字和日期"
              desc="用于处理数字、日期和数学运算的对象"
              prefix="/jsApi/"
              items={[
                { name: 'Number', link: 'Number' },
                { name: 'Math', link: 'Math' },
                { name: 'Date', link: 'Date' }
              ]}
            />

            <Card
              title="键控集合"
              desc="根据键来保存对象的集合，遍历时会根据放入的顺序"
              items={[{ name: 'Map' }, { name: 'Set' }, { name: 'WeakMap' }, { name: 'WeakSet' }]}
            />
            <Card title="其他" desc="其他" items={[{ name: 'arguments' }]} />
          </div>

          <div className="col">
            <Card
              title="文本处理"
              desc="用于处理文本的对象"
              prefix="/jsApi/"
              items={[
                { name: 'String', link: 'String' },
                { name: 'RegExp', link: 'RegExp/RegExp' }
              ]}
            />

            <Card
              title="索引集合"
              desc="根据索引来排列的集合，类似于数组的对象"
              prefix="/jsApi/"
              items={[
                { name: 'Array', link: 'Array' },
                { name: 'Int8Array' },
                { name: 'Uint8Array' },
                { name: 'Uint8ClampedArray' },
                { name: 'Int16Array' },
                { name: 'Uint16Array' },
                { name: 'Int32Array' },
                { name: 'Uint32Array' },
                { name: 'Float32Array' },
                { name: 'Float64Array' }
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
