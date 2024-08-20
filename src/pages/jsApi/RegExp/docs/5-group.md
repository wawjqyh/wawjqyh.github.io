# 分组

## 1 分组

如果我们像匹配一个单词多次，比如 `byron`

如果这么写 `\byron{3}\g`，只能匹配末尾的 `n` 3 次，不能匹配整个单词

需要匹配整个单词需要使用分组

> 使用 `()` 表示分组，使量词作用于分组

实现上面的功能就可以这么写 `\(byron){3}\g`

### 1.1 例子

```javascript
'a1b3c3def'.replace(/([a-z]\d){3}/g, 'X'); // Xdef
```

## 2 或

将 a1b 或 a2b 替换成 X

```javascript
'a1b a2b a3b abc'.replace(/a(1|2)b/g, 'X'); // X X a3b abc
```

## 3 捕获分组

分组之后可以捕获分组，也就是拿到分组匹配到的值，比如下面的场景：

将 `2015-12-25` 转换成 `25/12/2015`

```javascript
'2015-12-25'.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1'); // 25/12/2015
```

## 4 忽略分组

(:?xxx) `:?` 忽略分组

假如有场景有分组，但是不想记住分组，如上面的例子，忽略年份

将 `2015-12-25` 转换成 `25/12/2015`

```javascript
'2015-12-25'.replace(/(:?\d{4})-(\d{2})-(\d{2})/, '$2/$1'); // 25/12
```