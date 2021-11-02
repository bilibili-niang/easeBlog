---
title: webstrom为function添加注释快捷键
author: IceStone
tags:
  - webstrom
categories: []
abbrlink: 48630
date: 2021-08-14 10:55:00
---
如下面的jsfunction中,为其自动添加参数注释:
```javascript
var removeDuplicates = function (nums) {
    return 'afar'
}
```
只需要在方法前面添加`/**`之后enter即可添加:

```javascript
/**
 * 
 * @param nums
 * @returns {string}
 */
var removeDuplicates = function (nums) {
    return 'afar'
}
```