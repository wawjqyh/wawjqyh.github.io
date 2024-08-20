# 排序

算法动画演示 [https://visualgo.net/zh](https://visualgo.net/zh)

## 1 冒泡排序

> 冒泡排序，对比相邻的元素，将大的逐步移到末尾

**思路：**

相邻的两个元素比较，大的往后挪

**时间复杂度：**

`O(n^2)`

```js
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

## 2 选择排序

> 选择排序，即选择最小的元素放在头部

**思路：**

- 遍历数组，记住最小元素的位置
- 将最小的元素跟数组头部(未排序过的)元素交换位置

**时间复杂度：**

`O(n^2)`

```js
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    // i 之前的元素是排序过的
    for (let j = i; j < arr.length; j++) {
      // 找出后面最小的元素
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // i 是待交换的元素
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}
```

## 3 插入排序

> 插入排序，将后面的元素插入到前面排序好的数组中

**思路：**

- 数组分为前半段和后半段将，前半段是排序好的
- 取后半段第一个待排序的元素，提出来
- 逐一往前对比，插入到合适的位置

**时间复杂度：**

- `O(n^2)` 最坏
- `O(n)` 最好

```js
function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let target = arr[i]; // 待插入的元素

    for (let j = i - 1; j >= 0; j--) {
      // 比插入的元素大，就往后挪
      if (arr[j] > target) {
        arr[j + 1] = arr[j];
        arr[j] = target;
      }

      // 这里表示挪到了合适的位置，前面的数因为是排序好的，不需要继续对比了
      else {
        break;
      }
    }
  }

  return arr;
}
```

## 4 归并排序

> 归并排序，拆分合并有序数组。采用分而治之的思想，将大问题拆分为重复的小问题

**思路：**

- 将数组拆分为只有一个元素的有序数组
- 逐步的合并有序数组

**复杂度：**

`O(n log n)`

```js
function sort(arr) {
  if (arr.length === 1) return arr;

  // 拆分数组
  let midIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex, arr.length);

  let sLeft = sort(left);
  let sRight = sort(right);

  // 合并两个有序数组
  let newArr = [];

  while (sLeft.length && sRight.length) {
    if (sLeft[0] < sRight[0]) {
      newArr.push(sLeft.shift());
    } else {
      newArr.push(sRight.shift());
    }
  }

  while (sLeft.length) {
    newArr.push(sLeft.shift());
  }

  while (sRight.length) {
    newArr.push(sRight.shift());
  }

  return newArr;
}
```

**拆分逻辑：**

```js
// 合并两个有序数组
function merge2(arr1, arr2) {
  let arr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      arr.push(arr1.shift());
    } else {
      arr.push(arr2.shift());
    }
  }

  while (arr1.length) {
    arr.push(arr1.shift());
  }
  while (arr2.length) {
    arr.push(arr2.shift());
  }

  return arr;
}

function sort(arr) {
  if (arr.length === 1) return arr;

  // 拆分数组
  let midIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex, arr.length);

  let sLeft = sort(left);
  let sRight = sort(right);

  return merge2(sLeft, sRight);
}
```

## 5 快速排序

**思路：**

- 选择第一元素为基准点，将比它小的放左边，比他大的放右边
- 递归的将左右两个数组执行上面的步骤

**复杂度：**

`O(n log n)`

```js
function sort(arr) {
  if (arr.length < 2) return arr;

  let left = [];
  let right = [];
  const mid = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  let sLeft = sort(left);
  let sRight = sort(right);

  return [...sLeft, mid, ...sRight];
}
```

## 6 顺序搜索

## 7 二分搜索

## 8 LeetCode

### 8.1 LeetCode 21 合并两个有序链表

### 8.2 LeetCode 374 猜数字大小
