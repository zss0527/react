import "./index.scss"
import bg from "@/assets/bg.jpg"
import lgbg from "@/assets/lgbg.jpg"
import logo from "@/assets/logo.png"
import {type FormProps, message} from 'antd';
import { Button, Form, Input } from 'antd';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {login, type LoginData} from "@/api/users.ts";
import { useDispatch } from "react-redux"
import {setToken, setUser} from "@/store/login/authSlice.ts";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [ form ] = Form.useForm<FieldType>();
    const [ loading, setLoading ] = useState<boolean>(false)
    type FieldType = {
        username?: string;
        password?: string;
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        setLoading(true)
        login(values as LoginData).then(res => {
            console.log("login res",res)
            dispatch(setToken(res.data.token))
            dispatch(setUser(res.data.user.username))
            message.success("登录成功")
            setLoading(false)
            navigate("/", {replace:true})
        })
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed in onFinishFailed:', errorInfo);
    };

    const onLogin = () => {
        // form.validateFields().then(res => {
        //     console.log("login res",res);
        // }).catch(err => {
        //     console.log("login err",err);
        // })
    }

    return (
        <div className="login" style={{backgroundImage:`url(${bg})`}}>
            {/*react项目中不能直接在src中通过相对路径引入资源*/}
            {/*<img src="../../assets/logo.png"/>*/}
            {/*<img src={logo} />*/}
            <div className="lgbg" style={{backgroundImage:`url(${lgbg})`}}>
                <div className="loginBox">
                    <div className="title">
                        <div className="logo">
                            <img src={logo} width={100} alt=""/>
                        </div>
                        <h1>好养殖管理平台</h1>
                    </div>
                    <div>
                        <Form
                            form={form}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item<FieldType>
                                name="username"
                                rules={[{ required: true, message: '用户名不能为空!' }]}
                            >
                                <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
                            </Form.Item>

                            <Form.Item<FieldType>
                                name="password"
                                rules={[
                                    { required: true, message: '密码不能为空!' },
                                    { pattern:/^[a-zA-Z0-9]+$/, message: '密码只能是数字和字母' },
                                    { min: 3, max: 12, message: '密码长度在3-12位之间' }
                                ]}
                            >
                                <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} />
                            </Form.Item>

                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit" loading={loading} style={{width:"100%"}} onClick={onLogin}>
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;