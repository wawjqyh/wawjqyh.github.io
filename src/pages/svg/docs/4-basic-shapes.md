# 基本形状

## 1 矩形

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- `x` 矩形左上角的 x 位置
- `y` 矩形左上角的 y 位置
- `width` 矩形的宽度
- `height` 矩形的高度
- `rx` 圆角的 x 方位的半径
- `ry` 圆角的 y 方位的半径

## 2 圆形

只有 3 个属性用来设置圆形

```xml
<circle cx="25" cy="75" r="20"/>
```

- `r` 圆的半径
- `cx` 圆心的 x 位置
- `cy` 圆心的 y 位置

## 3 椭圆

ellipse 是 circle 元素更通用的形式，你可以分别缩放圆的 x 半径和 y 半径（通常数学家称之为长轴半径和短轴半径）

```xml
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

- `rx` 椭圆的 x 半径
- `ry` 椭圆的 y 半径
- `cx` 椭圆中心的 x 位置
- `cy` 椭圆中心的 y 位置

## 4 线条

line 绘制直线。它取两个点的位置作为属性，指定这条线的起点和终点位置。

```xml
<line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/>
```

- `x1` 起点的 x 位置
- `y1` 起点的 y 位置
- `x2` 终点的 x 位置
- `y2` 终点的 y 位置

## 5 折线

polyline 是一组连接在一起的直线。因为它可以有很多的点，折线的的所有点位置都放在一个 points 属性中：

```xml
<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
```

- `points` 点集数列。每个数字用空白、逗号、终止命令符或者换行符分隔开。每个点必须包含 2 个数字，一个是 x 坐标，一个是 y 坐标。所以点列表 (0,0), (1,1) 和 (2,2) 可以写成这样：“0 0, 1 1, 2 2”。

## 6 多边形

polygon 和折线很像，它们都是由连接一组点集的直线构成。不同的是，polygon 的路径在最后一个点处自动回到第一个点。需要注意的是，矩形也是一种多边形，如果需要更多灵活性的话，你也可以用多边形创建一个矩形

```xml
<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>
```

- `points` 点集数列。每个数字用空白符、逗号、终止命令或者换行符分隔开。每个点必须包含 2 个数字，一个是 x 坐标，一个是 y 坐标。所以点列表 (0,0), (1,1) 和 (2,2) 可以写成这样：“0 0, 1 1, 2 2”。路径绘制完后闭合图形，所以最终的直线将从位置 (2,2) 连接到位置 (0,0)

## 7 路径

path 可能是 SVG 中最常见的形状。你可以用 path 元素绘制矩形（直角矩形或者圆角矩形）、圆形、椭圆、折线形、多边形，以及一些其他的形状，例如贝塞尔曲线、2 次曲线等曲线。因为 path 很强大也很复杂，所以会在下一章进行详细介绍。这里只介绍一个定义路径形状的属性。

```xml
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

- `d` 一个点集数列以及其他关于如何绘制路径的信息
