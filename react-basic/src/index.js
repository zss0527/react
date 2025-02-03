//项目的入口文件

//React必要的两个包
import React from 'react';
import ReactDOM from 'react-dom/client';

//引入项目的根组件
import App from './App';

//把App根组件渲染到id为root的div节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
