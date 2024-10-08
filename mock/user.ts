const token =
  'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJSCjAK0A0Ndg1S0lFKrShQsjI0NzKzMDA2MzfUUSotTi3yTAGKQZh-ibmpQB2JKbmZeUq1AEsrJIFBAAAA.cHerqMHbJpjcIG3_sLF8jA6itBe1e7JlmUMmV6moBwBYEQtjB64OWGf7NUpPMFtO7fCkfTJr_7ksdy_QQTKYpA'

//createUserList:函数执行会返回一个数组,数组里面包含两个用户信息
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: 'admin',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: token,
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: token,
    },
  ]
}
type bodyType = {
  username: string
  password: string
}
//对外暴露一个数组:数组里面包含两个接口
//登录假的接口
//获取用户信息的假的接口
export default [
  // 用户登录接口
  {
    url: '/api/user/login', //请求地址
    method: 'post', //请求方式
    response: ({ body }: { body: bodyType }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password } = body
      //调用获取用户信息函数,用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      //没有用户返回失败信息
      if (!checkUser) {
        return { code: 201, data: { message: '账号或者密码不正确' } }
      }
      //如果有返回成功信息
      const { token } = checkUser
      return { code: 200, data: { token } }
    },
  },
  // 用户登出接口
  {
    url: '/api/user/login-out', //请求地址
    method: 'get', //请求方式
    response: (request: { headers: { token: string } }) => {
      //获取请求头携带token
      const token = request.headers.token
      const checkUser = createUserList().find((item) => item.token === token)
      if (checkUser) {
        return { code: 200, data: { message: 'ok' } }
      } else {
        return { code: 200, data: { message: 'err' } }
      }
    },
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request: { headers: { token: string } }) => {
      //获取请求头携带token
      const token = request.headers.token
      //查看用户信息是否包含有次token用户
      const checkUser = createUserList().find((item) => item.token === token)
      console.log('checkUser', checkUser)
      //没有返回失败的信息
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } }
      }
      //如果有返回成功信息
      return { code: 200, data: { ...checkUser } }
    },
  },
]
