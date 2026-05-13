import React from 'react';
import { Breadcrumb } from 'antd';
import {useLocation} from "react-router-dom";
import { pathToBreadcrumb } from '@/config/menuHelper';

const BreadCrumbC: React.FC = () => {
    const location = useLocation();

    // 根据当前路径生成面包屑
    const breadcrumbItems = pathToBreadcrumb(location.pathname);

    // 如果没有找到对应的菜单项，显示默认面包屑
    if (breadcrumbItems.length === 0) {
        return (
            <Breadcrumb
                style={{ margin: '16px 0' }}
                items={[
                    {
                        title: '首页',
                    },
                ]}
            />
        );
    }

    return (
        <Breadcrumb
            style={{ margin: '16px 0' }}
            items={breadcrumbItems.map((item, index) => ({
                title: index === breadcrumbItems.length - 1 ? (
                    item.title
                ) : (
                    <a href={`#${item.key}`}>{item.title}</a>
                ),
            }))}
        />
    );
};

export default BreadCrumbC;
