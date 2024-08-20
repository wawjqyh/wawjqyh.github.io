# ffmpeg 命令

## 1 裁剪

ffmpeg -ss 00:00:00 -t 00:00:30 -i test.mp4 -vcodec copy -acodec copy output.mp4

- -ss 指定从什么时间开始
- -t 指定需要截取多长时间
- -i 指定输入文件

## 2 转换

ffmpeg -i input.flv output.mp4
