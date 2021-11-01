> blog网站实现设计思路

---

### 路由设计
> 后端路由设计:
  
> `/`

- 进入网站的主页面,后端默认推送25条数据
- 会返回index页面(好像是个屁话)

> `/loginOrRegister`
- 登录/注册页面,这两个功能打算写在同一页面


> `/post`

- 修改,发布自己的文章,更具用户的session来判断用户

> `/username/articles`

- 注意,这里的username为用户名,返回不同用户的文章列表
- 默认返回25条

> `/username/artitalk`

- 用户的说说页面,默认返回15条


> `/username/archives`

- 用户编写文章的时间轴(归档)

#### 但是我目前打算只搞个人的账户,不打算开放,毕竟维护起来全是我的活儿



---

### 可能会使用到的api:

> 获取随机诗词:  

https://v1.jinrishici.com/all.json
