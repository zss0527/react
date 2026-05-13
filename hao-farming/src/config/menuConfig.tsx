// src/config/menuConfig.ts
import {
    DashboardOutlined,
    TeamOutlined,
    EnvironmentOutlined,
    SettingOutlined,
    FileTextOutlined,
    UserOutlined,
    SafetyOutlined
} from "@ant-design/icons";
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export interface MenuConfig {
    key: string;
    label: string;
    icon?: React.ReactNode;
    permission?: string;
    children?: MenuConfig[];
}

export const menuConfig: MenuConfig[] = [
    {
        key: '/',
        label: '工作台',
        icon: <DashboardOutlined />,
    },
    {
        key: '/livestock',
        label: '养殖管理',
        icon: <TeamOutlined />,
        children: [
            {
                key: '/livestock/view',
                label: '查看养殖数据',
                permission: 'livestock:view',
            },
            {
                key: '/livestock/create',
                label: '新增养殖记录',
                permission: 'livestock:create',
            },
            {
                key: '/livestock/update',
                label: '修改养殖记录',
                permission: 'livestock:update',
            },
            {
                key: '/livestock/delete',
                label: '删除养殖记录',
                permission: 'livestock:delete',
            },
        ]
    },
    {
        key: '/environment',
        label: '环境监控',
        icon: <EnvironmentOutlined />,
        children: [
            {
                key: '/environment/view',
                label: '查看环境数据',
                permission: 'environment:view',
            },
            {
                key: '/environment/create',
                label: '新增监控点',
                permission: 'environment:create',
            },
            {
                key: '/environment/update',
                label: '修改监控配置',
                permission: 'environment:update',
            },
            {
                key: '/environment/delete',
                label: '删除监控点',
                permission: 'environment:delete',
            },
        ]
    },
    {
        key: '/device',
        label: '设备管理',
        icon: <SettingOutlined />,
        children: [
            {
                key: '/device/view',
                label: '查看设备状态',
                permission: 'device:view',
            },
            {
                key: '/device/control',
                label: '控制设备',
                permission: 'device:control',
            },
            {
                key: '/device/config',
                label: '配置设备参数',
                permission: 'device:config',
            },
        ]
    },
    {
        key: '/report',
        label: '报表中心',
        icon: <FileTextOutlined />,
        children: [
            {
                key: '/report/view',
                label: '查看报表',
                permission: 'report:view',
            },
            {
                key: '/report/export',
                label: '导出报表',
                permission: 'report:export',
            },
        ]
    },
    {
        key: '/system',
        label: '系统管理',
        icon: <SafetyOutlined />,
        children: [
            {
                key: '/user',
                label: '用户管理',
                icon: <UserOutlined />,
                children: [
                    {
                        key: '/user/view',
                        label: '查看用户列表',
                        permission: 'user:view',
                    },
                    {
                        key: '/user/create',
                        label: '创建用户',
                        permission: 'user:create',
                    },
                    {
                        key: '/user/update',
                        label: '修改用户',
                        permission: 'user:update',
                    },
                    {
                        key: '/user/delete',
                        label: '删除用户',
                        permission: 'user:delete',
                    },
                ]
            },
            {
                key: '/role',
                label: '角色管理',
                icon: <SafetyOutlined />,
                children: [
                    {
                        key: '/role/view',
                        label: '查看角色',
                        permission: 'role:view',
                    },
                    {
                        key: '/role/assign',
                        label: '分配角色',
                        permission: 'role:assign',
                    },
                ]
            },
        ]
    }
];

export const filterMenuByPermissions = (
    menu: MenuConfig[],
    permissions: string[]
): MenuItem[] => {
    return menu.reduce<MenuItem[]>((acc, item) => {
        if (!item.permission || permissions.includes(item.permission)) {
            const menuItem: any = {
                key: item.key,
                label: item.label,
                icon: item.icon,
            };

            if (item.children) {
                const filteredChildren = filterMenuByPermissions(item.children, permissions);
                if (filteredChildren.length > 0) {
                    menuItem.children = filteredChildren;
                    acc.push(menuItem);
                }
            } else {
                acc.push(menuItem);
            }
        }

        return acc;
    }, []);
};
