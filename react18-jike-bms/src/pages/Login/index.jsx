import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png'
//用dispatch触发action
import { useDispatch } from 'react-redux'
import { fetchLogin } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    console.log('Success:', values);
    //触发异步action fetchLogin
    //由于调用的是异步的，所以下面的dispath行是异步执行的
    await dispatch(fetchLogin(values))
    //登录完毕后要做的事
    //1.跳转到主页
    navigate('/')
    //2.提示用户登录状况
    message.success('登录成功')
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          validateTrigger="onBlur"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            // label="Username"
            name="mobile"
            rules={[  //多条规则时按顺序校验
              {
                required: true,
                message: 'Please input your phone number!',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: 'please input right phone number formate'
              }
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            // label="Password"只有code:246810才能通过后端验证
            name="code"
            rules={[
              {
                required: true,
                message: 'Please input your passcode!',
              },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login