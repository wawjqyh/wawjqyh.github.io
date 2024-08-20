# 文件和目录

## 显示当前目录

```javascript
[wawjqyh@qiu ~]$ pwd
/home/wawjqyh
```

## 查看目录的内容

```javascript
ls [选项] [文件或目录]
```

* `-a` 显示所有文件，包括隐藏文件
* `-l` 显示详细信息
* `-d` 查看目录属性
* `-h` 人性化显示文件大小
* `-i` 显示inode

<p class="warning">`.`开头的文件为隐藏文件</p>

## 目录

创建目录

```javascript
mkdir test                      //创建test目录
mkdir -p test/test2             //创建test目录，并在test目录下创建test2目录

//在目录/usr/meng下建立子目录test，并且只有文件主有读、写和执行权限，其他人无权访问
mkdir -m 700 /usr/meng/test
```

## 新建文件

```javascript
touch
```

touch命令有两个功能：一是用于把已存在文件的时间标签更新为系统当前的时间（默认方式），它们的数据将原封不动地保留下来；二是用来创建新的空文件

## 删除

### rmdir

<p class="warning">`rmdir` 只能删除空目录</p>

```javascript
rmdir test      //删除test目录，如果test下有目录或者问价则不能删除
```

### rm

<p class="danger">注意：使用rm命令要格外小心。因为一旦删除了一个文件，就无法再恢复它</p>

选项

* `-d` 直接把欲删除的目录的硬连接数据删除成0，删除该目录
* `-f` 强制删除文件或目录
* `-i` 删除已有文件或目录之前先询问用户
* `-r或-R` 递归处理，将指定目录下的所有文件与子目录一并处理
* `--preserve-root` 不对根目录进行递归操作
* `-v` 显示指令的详细执行过程

```javascript
rm test             //rm: cannot remove 'test': Is a directory  提示不能删除
rm test -r          //删除文件夹，这时如果test下有其他文件会逐一询问是否删除
rm test -rf         //强制删除
```

## 复制

```javascript
cp [选项] [源文件或目录] [目标目录]
```

选项

* `-r` 复制目录
* `-p` 保留源文件或目录的属性
* `-d` 若源文件是链接文件，则复制链接属性
* `-a` 相当于 -pdr

<p class="warning">所有目标文件指定的目录必须是己经存在的，cp命令不能创建目录</p>

```javascript
//将assign文件复制到当前目录下
cp ../mary/homework/assign .

//将文件file复制到目录/usr/men/tmp下，并改名为file1
cp file /usr/men/tmp/file1

//将目录/usr/men下的所有文件及其子目录复制到目录/usr/zh中；
cp -r /usr/men /usr/zh

//交互式地将目录/usr/men中的以m开头的所有.c文件复制到目录/usr/zh中
cp -i /usr/men m*.c /usr/zh
```

## 移动/重命名

cp [选项] [源文件或目录] [目标文件或目录]

选项和cp类似

```javascript
mv ex3 new1         //将文件ex3改名为new1
mv /usr/men/* .     //将目录/usr/men中的所有文件移到当前目录（用.表示）中
```

## 链接

```javascript
ln -s [原文件] [目标文件]
```

选项

* `-s` 创建软链接

#### 硬链接

* 拥有相同的i节点和存储block块，可以看做是同一个文件
* 可通过i节点识别
* 不能跨分区
* 不能针对目录使用

#### 软链接

* 类似windows快捷方式
* 软链接拥有自己的i节点和block块，但是数据块中只保存原文件的文件名和i节点号，并没有实际的文件数据
* 修改任意文件，另一个都改变
* 删除原文件，软链接不能使用