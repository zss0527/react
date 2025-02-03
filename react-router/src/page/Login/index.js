import { useParams } from "react-router-dom";

const Login = () => {
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
