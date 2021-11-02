title: '使用displsy:flex + overflow:hidden时子元素被压缩'
author: IceStone
abbrlink: 9991
tags:
  - 走过的坑
  - ''
categories: []
date: 2021-09-22 13:54:00
---
> 以下结构就很可能会发生子元素被压缩:

```less
  .ul {
    display: flex;
    overflow: hidden;
    li {
      display: flex;
     }
    }
```

效果:


![upload successful](/images/pasted-15.png)

---

> 此时我的目的是做一个轮播图,想让ul在div中使用关键帧播放,做到这个效果而且元素不被压缩的话可以使用下面这个结构:

```html
        <div class="containerLimted">
            <ul class="theRoulousChartContainer controlerFlag revolveControler">
                <li class="firstImage containerLimtd"></li>
                <li class="secondImage containerLimtd"></li>
                <li class="thirdImage containerLimtd"></li>
                <li class="fourthImage containerLimtd"></li>
                <li class="endImage containerLimtd"></li>
            </ul>
        </div>
```

为外层的div设置高度,宽度,overflow:hidden,  
ul设设置高度不设置宽度,display:flex即可
li设为display:flex
此时即可实现滚动


![upload successful](/images/pasted-16.png)



![upload successful](/images/pasted-17.png)



---

> 关于滚动的关键帧:

此时可以实现滚动一次,暂停一会,具体暂停多少时间,是根据animation的总时长和百分比进度决定的

```less
@keyframes revolve {

  0%,
  15% {
    margin-left: -88rem;
  }

  25%,
  35% {
    margin-left: -66rem;
  }

  45%,
  55% {
    margin-left: -44rem;
  }

  65%,
  75% {
    margin-left: -22rem;
  }

  85%,
  100% {
    margin-left: 0rem;
  }
}
```

