# 总结

## 服务端渲染的缺点

最大的缺点就是极大的消耗服务器的性能。客户端渲染是放在用户的浏览器上，而服务端渲染是所有用户的渲染都放在了服务器上。

而运行 react 代码很消耗性能，期间需要做大量的计算、比对等。

如果服务端渲染不是非必须，即不需要做 SEO 或者对首屏的加载速度要求不高的话，不要轻易做服务端渲染。
