import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom"
import router from './router'

//1. 创建router实例对象并且配置路由对应关系
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello World!</div>
//   },
//   {
//     path: "/login",
//     element: <div>i am login page</div>
//   },
//   {
//     path: "/article",
//     element: <div>i am article page</div>
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //路由绑定
  <RouterProvider router={router} />
);
