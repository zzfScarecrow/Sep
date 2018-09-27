# Sep

Rollup+React+Antd 组件库（私用）

# Issue

1、无法从 ts 转换成 js 后立即经过 babel 转换成 es5，可再写一个工具来转换
2、调研 rollup 多入口的问题

fangtian(方天画戟)
1、给 dist/components/{COMPONENTNAME}/styles/css.js 添加内容：

```javascript
import './index.css'
import '../../styles/index.css'
```
