import React, {useEffect, useMemo} from 'react';
import {Layout} from 'antd';
import { theme } from 'antd';
import BreadCrumbC from "@/components/breadcrumb";
import HeaderC from "@/components/header";
import NavMenu from "@/components/navmenu";
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";
import {getMyPermissionsDetails} from "@/api/permissions.ts";
import type {PermissionItem} from "@/utils/permissionMenuMap.tsx";
import {setMenuData, setPermissions} from "@/store/login/authSlice.ts";
import { menuConfig, filterMenuByPermissions } from '@/config/menuConfig';


const { Header, Content, Footer, Sider } = Layout;


const Home: React.FC = () => {
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = React.useState(false);
    const {user, permissions} = useSelector((state:any) => state.authSlice);
    const {
        token: { colorBgContainer},
    } = theme.useToken();

    useEffect(() => {
        getMyPermissionsDetails().then(res => {
            const permissionsData: PermissionItem[] = res.data.data;
            console.log("permissions in home:", permissionsData)
            dispatch(setPermissions(permissionsData))
        }).catch(err => {
            console.error('获取菜单失败:', err)
        })
    },[])

    const menuData = useMemo(() => {
        if (!permissions || permissions.length === 0) {
            return []
        }

        // 将权限数组转换为字符串数组
        const permissionStrings = permissions.map((p: PermissionItem) =>
            `${p.resource}:${p.action}`
        );

        // 根据权限过滤菜单
        const menuData = filterMenuByPermissions(menuConfig, permissionStrings);
        console.log("menuData:", menuData)
        return menuData
    }, [permissions])

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <NavMenu isCollapsed={collapsed} menuData={menuData} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <HeaderC username={user}/>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <BreadCrumbC/>
                    <Outlet/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Home;
