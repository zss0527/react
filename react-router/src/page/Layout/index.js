import { Link, Outlet, useNavigate } from "react-router-dom";
import "./index.css";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className={"left"}>
        <Link to="/layout">Layout page</Link>
        <button onClick={() => navigate("/layout/board")}>跳转Board页面</button>
        <button onClick={() => navigate("/layout/about")}>跳转About页面</button>
      </div>

      {/*二级路由出口*/}
      <div className="right">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
