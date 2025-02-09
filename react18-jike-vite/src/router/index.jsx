import AuthRoute from "@/components/AuthRoute";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";
// import Home from '@/pages/Home'
// import Article from '@/pages/Article'
// import Publish from '@/pages/Publish'
//react路由懒加载
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthRoute> <Layout /> </AuthRoute>,
        children: [
            {
                index: true,  //二级路由默认为home
                element: <Suspense fallback={'loading...'}><Home /></Suspense>
            },
            {
                path: 'article',
                element: <Suspense fallback={'loading...'}><Article /></Suspense>
            },
            {
                path: 'publish',
                element: <Suspense fallback={'loading...'}><Publish /></Suspense>,
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    }
]);

export default router