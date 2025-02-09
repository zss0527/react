import { useParams } from "react-router-dom";

const Login = () => {
  //用于接收url/p1/p2形式的参数值，其中p1和p2定义在路由上
  const param = useParams();
  //id来自于路由配置里的占位符
  const id = param.id;
  const name = param.name;
  return (
    <>
      <div>我是登录页</div>
      {id}
      <br />
      {name}
    </>
  );
};

export default Login;
