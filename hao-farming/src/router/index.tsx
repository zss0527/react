import React from "react";
import RequireAuth from "@/utils/RequireAuth.tsx";
import Workbench from "@/page/workbench";

const Home = React.lazy(() => import("../page/home"));
const Login = React.lazy(() => import("../page/login"));
const NotFound = React.lazy(() => import("../page/notfound"));

// 养殖管理
const LivestockView = React.lazy(() => import("@/page/livestock"));
const LivestockCreate = React.lazy(() => import("@/page/livestock"));
const LivestockUpdate = React.lazy(() => import("@/page/livestock"));
const LivestockDelete = React.lazy(() => import("@/page/livestock"));

// 环境监控
const EnvironmentView = React.lazy(() => import("@/page/environment"));
const EnvironmentCreate = React.lazy(() => import("@/page/environment"));
const EnvironmentUpdate = React.lazy(() => import("@/page/environment"));
const EnvironmentDelete = React.lazy(() => import("@/page/environment"));

// 设备管理
const DeviceView = React.lazy(() => import("@/page/device"));
const DeviceControl = React.lazy(() => import("@/page/device"));
const DeviceConfig = React.lazy(() => import("@/page/device"));

// 报表中心
const ReportView = React.lazy(() => import("@/page/report"));
const ReportExport = React.lazy(() => import("@/page/report"));

// 用户管理
const UserView = React.lazy(() => import("@/page/user"));
const UserCreate = React.lazy(() => import("@/page/user"));
const UserUpdate = React.lazy(() => import("@/page/user"));
const UserDelete = React.lazy(() => import("@/page/user"));

// 角色管理
const RoleView = React.lazy(() => import("@/page/role"));
const RoleAssign = React.lazy(() => import("@/page/role"));

const initialRouterList = [
    {
        path: "/",
        element: <RequireAuth allowed={true} redirectTo={"/login"}><Home/></RequireAuth>,
        children: [
            // 工作台
            {
                path: "/",
                element: <RequireAuth allowed={true} redirectTo={"/login"}><Workbench/></RequireAuth>
            },

            // 养殖管理
            {
                path: "/livestock/view",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/livestock/view">
                        <LivestockView/>
                    </RequireAuth>
                )
            },
            {
                path: "/livestock/create",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/livestock/create">
                        <LivestockCreate/>
                    </RequireAuth>
                )
            },
            {
                path: "/livestock/update",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/livestock/update">
                        <LivestockUpdate/>
                    </RequireAuth>
                )
            },
            {
                path: "/livestock/delete",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/livestock/delete">
                        <LivestockDelete/>
                    </RequireAuth>
                )
            },

            // 环境监控
            {
                path: "/environment/view",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/environment/view">
                        <EnvironmentView/>
                    </RequireAuth>
                )
            },
            {
                path: "/environment/create",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/environment/create">
                        <EnvironmentCreate/>
                    </RequireAuth>
                )
            },
            {
                path: "/environment/update",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/environment/update">
                        <EnvironmentUpdate/>
                    </RequireAuth>
                )
            },
            {
                path: "/environment/delete",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/environment/delete">
                        <EnvironmentDelete/>
                    </RequireAuth>
                )
            },

            // 设备管理
            {
                path: "/device/view",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/device/view">
                        <DeviceView/>
                    </RequireAuth>
                )
            },
            {
                path: "/device/control",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/device/control">
                        <DeviceControl/>
                    </RequireAuth>
                )
            },
            {
                path: "/device/config",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/device/config">
                        <DeviceConfig/>
                    </RequireAuth>
                )
            },

            // 报表中心
            {
                path: "/report/view",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/report/view">
                        <ReportView/>
                    </RequireAuth>
                )
            },
            {
                path: "/report/export",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/report/export">
                        <ReportExport/>
                    </RequireAuth>
                )
            },

            // 用户管理
            {
                path: "/user/view",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/user/view">
                        <UserView/>
                    </RequireAuth>
                )
            },
            {
                path: "/user/create",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/user/create">
                        <UserCreate/>
                    </RequireAuth>
                )
            },
            {
                path: "/user/update",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/user/update">
                        <UserUpdate/>
                    </RequireAuth>
                )
            },
            {
                path: "/user/delete",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/user/delete">
                        <UserDelete/>
                    </RequireAuth>
                )
            },

            // 角色管理
            {
                path: "/role/view",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/role/view">
                        <RoleView/>
                    </RequireAuth>
                )
            },
            {
                path: "/role/assign",
                element: (
                    <RequireAuth allowed={true} redirectTo={"/login"} permission="/role/assign">
                        <RoleAssign/>
                    </RequireAuth>
                )
            },
        ]
    },
    {
        path: "/login",
        element: <RequireAuth allowed={false} redirectTo={"/"}><Login/></RequireAuth>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]

export default initialRouterList;
