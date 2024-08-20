# 查找文件

## locate 搜索文件

locate命令其实是find -name的另一种写法，但是要比后者快得多，原因在于它不搜索具体目录，而是搜索一个数据库/var/lib/locatedb，
这个数据库中含有本地所有文件信息。Linux系统自动创建这个数据库，并且每天自动更新一次，所以使用locate命令查不到最新变动过的
文件。为了避免这种情况，可以在使用locate之前，先使用updatedb命令，手动更新数据库

```javascript
locate /etc/sh          //搜索etc目录下所有以sh开头的文件
locate ~/m              //搜索用户主目录下，所有以m开头的文件
locate -i ~/m           //搜索用户主目录下，所有以m开头的文件，并且忽略大小写
```

#### 配置文件

```javascript
/etc/updatedb.conf
```

## whereis与which 搜索命令

```javascript
whereis [命令名]       //只能搜索系统命令
//搜索命令所在路径及帮助文档所在位置
```

#### 选项

* `-b` 只查找可执行文件
* `-m` 只查找帮助文件

```javascript
which                   //搜索命令所在路径和别名
```

## find

#### 语法

```javascript
find [搜索范围] [搜索条件]
```

#### 注意

* 避免大范围搜索，会非常耗费系统资源
* find是在系统当中搜索符合条件的文件名。如果需要匹配，使用通配符匹配，通配符是完全匹配

### 根据文件或者正则表达式进行匹配

```javascript
//列出当前目录及子目录下所有文件和文件夹
find .

//在/home目录下查找以.txt结尾的文件名
find /home -name "*.txt"

//在/home目录下查找以.txt结尾的文件名，但忽略大小写
find /home -iname "*.txt"

//当前目录及子目录下查找所有以.txt和.pdf结尾的文件
find . \( -name "*.txt" -o -name "*.pdf" \)
find . -name "*.txt" -o -name "*.pdf"

//匹配文件路径或者文件
find /usr/ -path "*local*"

//基于正则表达式匹配文件路径
find . -regex ".*\(\.txt\|\.pdf\)$"

//同上，但忽略大小写
find . -iregex ".*\(\.txt\|\.pdf\)$"
```

### 否定参数(取反)

```javascript
//找出/home下不是以.txt结尾的文件
find /home ! -name "*.txt"
```

### 根据文件类型进行搜索

```javascript
find . -type 类型参数
```

#### 类型参数列表：

* `f` 普通文件
* `l` 符号连接
* `d` 目录
* `c` 字符设备
* `b` 块设备
* `s` 套接字
* `p` Fifo

### 基于目录深度搜索

```javascript
//向下最大深度限制为3
find . -maxdepth 3 -type f

//搜索出深度距离当前目录至少2个子目录的所有文件
find . -mindepth 2 -type f

### 根据文件时间戳进行搜索

```javascript
find . -type f 时间戳
```

#### UNIX/Linux文件系统每个文件都有三种时间戳：

* 访问时间（-atime/天，-amin/分钟）：用户最近一次访问时间
* 修改时间（-mtime/天，-mmin/分钟）：文件最后一次修改时间
* 变化时间（-ctime/天，-cmin/分钟）：文件数据元（例如权限等）最后一次修改时间

```javascript
//搜索最近七天内被访问过的所有文件
find . -type f -atime -7

//搜索恰好在七天前被访问过的所有文件
find . -type f -atime 7

//搜索超过七天内被访问过的所有文件
find . -type f -atime +7

//搜索访问时间超过10分钟的所有文件
find . -type f -amin +10

//找出比file.log修改时间更长的所有文件
find . -type f -newer file.log
```

### 根据文件大小进行匹配

```javascript
find . -type f -size
```

#### 文件大小单元 文件大小单元：

* `b` —— 块（512字节）
* `c` —— 字节
* `w` —— 字（2字节）
* `k` —— 千字节
* `M` —— 兆字节
* `G` —— 吉字节

```javascript
//搜索大于10KB的文件
find . -type f -size +10k

//搜索小于10KB的文件
find . -type f -size -10k

//搜索等于10KB的文件
find . -type f -size 10k
```

### 删除匹配文件

```javascript
//删除当前目录下所有.txt文件
find . -type f -name "*.txt" -delete
```

### 根据文件权限/所有权进行匹配

```javascript
//当前目录下搜索出权限为777的文件
find . -type f -perm 777

//找出当前目录下权限不是644的php文件
find . -type f -name "*.php" ! -perm 644

//找出当前目录用户tom拥有的所有文件
find . -type f -user tom

//找出当前目录用户组sunk拥有的所有文件
find . -type f -group sunk
```

### 借助-exec选项与其他命令结合使用

```javascript
//找出当前目录下所有root的文件，并把所有权更改为用户
tom find .-type f -user root -exec chown tom {} \;
//上例中，{} 用于与-exec选项结合使用来匹配所有文件，然后会被替换为相应的文件名。

//找出自己家目录下所有的.txt文件并删除
find $HOME/. -name "*.txt" -ok rm {} \;
//上例中，-ok和-exec行为一样，不过它会给出提示，是否执行相应的操作。

//查找当前目录下所有.txt文件并把他们拼接起来写入到all.txt文件中
find . -type f -name "*.txt" -exec cat {} \;> all.txt

//将30天前的.log文件移动到old目录中
find . -type f -mtime +30 -name "*.log" -exec cp {} old \;

//找出当前目录下所有.txt文件并以“File:文件名”的形式打印出来
find . -type f -name "*.txt" -exec printf "File: %s\n" {} \;

//因为单行命令中-exec参数中无法使用多个命令，以下方法可以实现在-exec之后接受多条命令
-exec ./text.sh {} \;
```

### 搜索但跳出指定的目录

```javascript
查找当前目录或者子目录下所有.txt文件，但是跳过子目录sk
find . -path "./sk" -prune -o -name "*.txt" -print
```

## grep

搜索文件中的字符串

```javascript
//在文件中搜索一个单词，命令会返回一个包含“match_pattern”的文本行
grep "match_pattern" file_name
```