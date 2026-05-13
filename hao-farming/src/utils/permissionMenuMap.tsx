import {AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined, DashboardOutlined, TeamOutlined} from "@ant-design/icons";
import type { MenuProps } from 'antd';
import React from "react";

type MenuItem = Required<MenuProps>['items'][number];

const iconMap = [
    <DashboardOutlined key="dashboard" />,
    <TeamOutlined key="team" />,
    <ContainerOutlined key="container" />,
    <MailOutlined key="mail" />,
    <AppstoreOutlined key="appstore" />,
    <DesktopOutlined key="desktop" />,
    <PieChartOutlined key="pie" />
];

const actionIconMap: Record<string, React.ReactNode> = {
    view: <DashboardOutlined />,
    create: <TeamOutlined />,
    update: <ContainerOutlined />,
    delete: <MailOutlined />,
    control: <AppstoreOutlined />,
    config: <DesktopOutlined />,
    export: <PieChartOutlined />,
    assign: <TeamOutlined />
};

const getIconByResource = (resource: string): React.ReactNode => {
    const iconIndex = resource.length % iconMap.length;
    return iconMap[iconIndex];
};

export interface PermissionItem {
    id: number;
    name: string;
    resource: string;
    action: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export const convertPermissionsToMenu = (permissions: PermissionItem[]): MenuItem[] => {
    const resourceMap = new Map<string, PermissionItem[]>();

    if(!permissions) {
        return []
    }

    permissions.forEach(permission => {
        if (!resourceMap.has(permission.resource)) {
            resourceMap.set(permission.resource, []);
        }
        resourceMap.get(permission.resource)!.push(permission);
    });

    const menuItems: MenuItem[] = [];

    resourceMap.forEach((items, resource) => {
        const children: MenuItem[] = items.map(item => ({
            key: `/${resource}/${item.action}`,
            label: item.description,
            icon: actionIconMap[item.action] || <DashboardOutlined />
        }));

        menuItems.push({
            key: `/${resource}`,
            label: resource,
            icon: getIconByResource(resource),
            children: children
        });
    });

    return menuItems;
};
