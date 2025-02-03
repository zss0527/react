import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
import About from "../page/Layout/About";
import Board from "../page/Layout/Board";
import SubMain from "../page/Layout/SubMain";
import NotFound from "../page/NotFound";
import App from "../App";

import { createBrowserRouter } from "react-router-dom";

//两种路由模式
//history模式用createBrowerRouter
//hash模式用createHashRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login/:id/:name",
    element: <Login />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/layout",
    element: <Layout />,
    children: [
      {
        //默认二级路由
        index: true,
        element: <SubMain />,
      },
      {
        path: "board",
        element: <Board />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    //404路由，必须放在路由配置的最后面，path值为’*‘
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
