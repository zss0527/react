import { Link, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  return (
    <>
      {/*声明式导航*/}
      <Link to="/login">跳转到登录页</Link>
      <br />

      {/*命令式导航*/}
      <button onClick={() => navigate("/article")}>跳转到文章页</button>
      <br />

      {/*命令行导航并传参,在目标组件中通过useSearchParams接收参数*/}
      <button onClick={() => navigate("/article?id=100&name=larry")}>
        跳转文章页并传参
      </button>

      {/*命令行导航并传参,在目标组件中通过useParams接收参数，并且需要在路由配置里配置对应格式的占位符*/}
      <button onClick={() => navigate("/login/1001/jack")}>
        跳转登录页并传参
      </button>
      <br />

      {/*二级路由*/}
      <button onClick={() => navigate("/layout")}>跳转Layout页面</button>
    </>
  );
}

export default App;
