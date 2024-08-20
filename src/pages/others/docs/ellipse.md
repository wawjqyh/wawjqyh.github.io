# 文字溢出和换行

## 1 场景

### 1.1 文字溢出

如下图，框内是一个文字显示区域，可以看到某些行的末尾有比较多的空白，这是为什么呢？仔细观察会发现，是因为末尾的区域无法显示下一个完整的单词，为了阅读体验更好会另起一行。

那么因为这种特性，就会出现文字溢出的 bug，如下图，有一个超长的“单词”超过了边界。这种中间没有空格的一串字母会被认为是一个单词，那么就直接溢出了。

### 1.2 文字换行

如下图，某个作品的标题很长，然后换行了。但是这里的设计是按照单行文字来显示的，这样就会造成样式错乱。

## 2 解决方案

### 2.1 文字溢出

这两个问题并不是什么疑难杂症，出现的原因大多是没有考虑到这些情况，然后漏写了一些样式。

对于文字溢出的问题，有两种解决方式。

一是不强制断词，让溢出的单词换行，代码如下：

```css
word-wrap: break-word;
```

或者

```css
word-break: break-word;
```

加上这个样式就能实现下面的效果，但还是会有问题，可以看到行尾还是有比较多的空白。还有一种方式就是断词换行，代码如下：

```css
word-break: break-all;
```

这种方式也有缺点，可以看到行末的单词被断开了，这就不太利于阅读了，但是不会出现那么多空白。所以这两种方式还是需要根据实际的情况权衡一下。

### 2.2 文字换行

文字换行通常解决方法就是超出显示省略号。

单行文字显示省略号：

```css
overflow: hidden;
text-overflow: ellipse;
white-space: nowrap;
```

多行文字显示省略号：

```css
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
```

多行文字使用上面的方式会有个问题，超出的文字不会被隐藏。如下图所示，显示区域设了内边距，虽然省略号是有了，但在内边框内还可以看到超出的文字。

### 2.3 Ellipse 组件

文字换行另一种解决方案就是写个组件，通过 js 来计算区域内能显示多少个字符，不用每次都写样式。组件内可以添加些额外的功能，比如鼠标移上显示 tooltip 展示完整的文字内容，或者点击某个按钮显示全部

组件使用方式：

```jsx
/**
 * @param {number} row 显示的行数
 * @param {boolean} toolTip 超出是否显示 toolTip
 */
<Ellipse row={3} toolTip={true}>
  文字文字
</Ellipse>
```

这是一个 react 的组件，vue 需要稍微改动一下。里面算法和健壮度还可以优化，上代码：

```jsx
let showHeight = 0;

class Ellipse extends Component {
  state = {
    ellipse: false,
    textHidden: '',
    textShow: ''
  };

  constructor(props) {
    super(props);
    this.eleHidden = React.createRef();
  }

  componentDidMount() {
    // 组件渲染完成时判断是否需要显示省略号
    this.checkEllipse();
  }

  componentDidUpdate(prevProps) {
    // 内容区域改动时判断是否需要显示省略号
    if (prevProps.children !== this.props.children) {
      this.checkEllipse();
    }
  }

  checkEllipse = () => {
    let length = this.props.children.length;
    let row = this.props.row || 1;

    // 根据行高获取显示区域的最大高度
    showHeight = parseFloat(window.getComputedStyle(this.eleHidden.current).lineHeight.split('px')[0]) * row;

    this.setState({ textHidden: this.props.children }, () => {
      // 隐藏区域的高度大于最大高度的话则需要显示省略号
      if (this.eleHidden.current.offsetHeight > showHeight) {
        this.setState({ ellipse: true });
        this.setEllipse(0, length);
      } else {
        this.setState({ ellipse: false, textShow: this.props.children });
      }
    });
  };

  // 计算截取的字符串
  setEllipse = (end, sub) => {
    const text = this.props.children;
    const textHidden = text.substr(0, end + sub) + '...'; // 先把省略号加进隐藏区域的字符中方便计算

    this.setState({ textHidden }, () => {
      // 文字超出
      if (this.eleHidden.current.offsetHeight > showHeight) {
        let _end = end + sub;
        let _sub = -parseInt(Math.abs(sub) / 2);

        if (_sub === 0) _sub = -1;

        // 递归
        this.setEllipse(_end, _sub);
      }

      // 文字未超出
      else {
        if (Math.abs(sub) === 1) {
          this.setState({ textShow: textHidden });
        } else {
          let _end = end + sub;
          let _sub = parseInt(Math.abs(sub) / 2);

          if (_sub === 0) _sub = 1;

          this.setEllipse(_end, _sub);
        }
      }
    });
  };

  render() {
    const { textHidden, textShow, ellipse } = this.state;
    const { toolTip, children } = this.props;

    return (
      <div className={styles.ellipse}>
        <div className={styles.hidden} ref={this.eleHidden}>
          {textHidden}
        </div>

        {ellipse && toolTip ? (
          <Tooltip title={children}>
            <div>{textShow}</div>
          </Tooltip>
        ) : (
          <div>{textShow}</div>
        )}
      </div>
    );
  }
}

export default Ellipse;
```
