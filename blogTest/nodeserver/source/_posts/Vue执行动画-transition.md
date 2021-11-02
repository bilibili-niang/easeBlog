title: Vue执行动画(transition)
author: IceStone
tags:
  - vue
  - animation
categories: []
abbrlink: 32863
date: 2021-08-10 19:29:00
---
###### Vue中的动画机制: [参考](https://cn.vuejs.org/v2/guide/transitions.html#%E6%98%BE%E6%80%A7%E7%9A%84%E8%BF%87%E6%B8%A1%E6%8C%81%E7%BB%AD%E6%97%B6%E9%97%B4)
Vue中的动画可以认为是有生命周期的:  
> 下面前四个事件是元素进入中到完成进入  
> 后四个是元素离开时到完全离开
```html
<transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled"

            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled"
    >
        <!-- ... -->
    </transition>
```

---


#####  1.`transition`使用默认的前缀定义动画:  
```html
    <!--自定义两组样式来控制transition内部元素实现动画-->
    <style>
        /*v-enter[这是一个时间点]是进入之前,元素的起始状态,此时还没有开始进入*/
        /*v-leave-to[这是一个时间点] 是动画离开之后,离开的终止状态,此时元素动画已经结束*/
        /*
        这里的v-enter,v-leave-to等是为transition定义动画效果的
        */
        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateX(80px);
        }
        /*v-enter-active [入场动画的时间段]*/
        /*v-leave-active [离场动画的时间段]*/
        .v-enter-active,
        .v-leave-active {
            transition: all 0.8s ease;
        }
    </style>
</head>
<body>
<div id="app">
    <input type="button" value="toggle" @click="flag=!flag">
    <!--1.使用transition使元素动起来-->
    <!--transition是官方提供的-->
    <transition>
        <h3 v-if="flag">这是一个h3</h3>
    </transition>
</div>

<script>
    var vm = new Vue({
        el: '#app', data: {
            flag: false,
        }, methods: {}
    })
</script>
</body>
```

>此处是在html中定义了一个`transition`标签,再使用默认的`过渡的类名`来设置动画

效果:  啊这,自己试一试吧,gjf图不太好整  

#####  2.`transition`使用自定义的前缀定义动画:  
```html
<style>
		/*默认前缀的样式*/
        .v-enter,
        .v-leave-to {
            opacity: 0;
            transform: translateX(80px);
        }
        .v-enter-active,
        .v-leave-active {
            transition: all 0.8s ease;
        }
        /*my-前缀的样式*/
        .my-enter,
        .my-leave-to {
            opacity: 0;
            transform: translateY(80px);
        }
        .my-enter-active,
        .my-leave-active {
            transition: all 0.8s ease;
        }
    </style>
</head>
<body>
<div id="app">
    <input type="button" value="toggle" @click="flag=!flag">
    <!--
    transition中.为他定义属性的前缀默认是v-
    -->
    <transition>
        <h3 v-if="flag">这是一个h3</h3>
    </transition>
    <hr>
    <input type="button" value="toggle2" @click="flag2=!flag2">
    <!--此时如果不想和上面的功用一个style,可以为transition定一个name--->
    <!--
    从而使该transition的样式定义的前缀为my-
    -->
    <transition name="my">
        <h6 v-if="flag2">这是一个h6</h6>
    </transition>
</div>
<script>
    var vm = new Vue({
        el: '#app',
        data: {
            flag: false,
            flag2: false
        },
        methods: {}
    })
</script>
</body>
```

> 此处是在html标签中的`transition`标签里定义了一个`name=前缀`,然后在style中使用`前缀-enter`等定义动画  

效果:  啊这,自己试一试吧,gjf图不太好整  