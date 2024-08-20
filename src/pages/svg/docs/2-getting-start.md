# 入门

## 1 一个简单的示例

```xml
<svg version="1.1"
     baseProfile="full"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>
```

![](../images/2-getting-start_20231011174143.png)

**绘制流程包括以下几步：**

- 从 `<svg>` 根元素开始：
  - 应舍弃来自 (X)HTML 的 doctype 声明，因为基于 DTD 的 SVG 验证导致的问题比它能解决的问题更多
  - SVG 2 之前 `version` 属性和 `baseProfile` 属性用来供其他类型的验证识别 SVG 的版本。SVG 2 已弃用 `version` 和 `baseProfile` 这两个属性
  - 作为 XML 的一种方言，SVG 必须正确的绑定命名空间（在 `xmlns` 属性中绑定）
- 绘制一个完全覆盖图像区域的矩形 `<rect>`，把背景颜色设为红色
- 一个半径 `80px` 的绿色圆圈 `<circle>` 绘制在红色矩形的正中央（向右偏移 150px，向下偏移 100px）
- 绘制文字 “SVG”。文字被填充为白色，通过设置居中的锚点把文字定位到期望的位置：在这种情况下，中心点应该对应于绿色圆圈的中点。还可以精细调整字体大小和垂直位置，确保最后的样式是美观的

## 2 SVG 文件的基本属性

最值得注意的一点是元素的渲染顺序。SVG 文件全局有效的规则是“后来居上”，越后面的元素越可见

web 上的 SVG 文件可以直接在浏览器上展示，或者通过以下几种方法嵌入到 HTML 文件中：

- 如果 HTML 是 XHTML 并且声明类型为 `application/xhtml+xml`，可以直接把 SVG 嵌入到 XML 源码中
- SVG 可以直接被嵌入到 HTML 中
- 可以使用 img 元素
- 可以通过 object 元素引用 SVG 文件：
  ```html
  <object data="image.svg" type="image/svg+xml"></object>
  ```
- 类似的也可以使用 iframe 元素引用 SVG 文件：
  ```html
  <iframe src="image.svg"></iframe>
  ```
- SVG 可以通过 JavaScript 动态创建并注入到 HTML DOM 中

## 3 SVG 文件类型

SVG 文件有两种形式。普通 SVG 文件是包含 SVG 标记的简单文本文件。推荐使用 “.svg”（全部小写）作为此类文件的扩展名

由于在某些应用（比如地图应用等）中使用时，SVG 文件可能会很大，SVG 标准同样允许 gzip 压缩的 SVG 文件。推荐使用“.svgz”（全部小写）作为此类文件扩展名
