# 字符串对象方法

## 1 search

[文档](/jsApi/String/search)

search 检索与正则表达式相匹配的值

```javascript
str.search(regexp);
```

> 返回值：如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1

## 2 match

[文档](/jsApi/String/match)

match 找到一个或多个正则表达式的匹配

```javascript
str.match(regexp);
```

> 返回值：一个包含了整个匹配结果以及任何括号捕获的匹配结果的 Array ；如果没有匹配项，则返回 null

```javascript
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

## 3 replace

[文档](/jsApi/String/replace)

replace 替换与正则表达式匹配的子串

```javascript
str.replace(regexp|substr, newSubStr|function);
```

> 返回值：一个部分或全部匹配由替代模式所取代的新的字符串

```javascript
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr); // Twas the night before Christmas...
```

## 4 split

[文档](/jsApi/String/split)

split 把字符串分割为字符串数组

```javascript
str.split([separator[, limit]]);
```

> 返回值：返回一个数组

```javascript
var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';
var re = /\s*;\s*/;
var nameList = names.split(re);

console.log(nameList);
// ["Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand "]
```
