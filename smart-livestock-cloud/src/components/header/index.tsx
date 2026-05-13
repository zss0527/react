import React from 'react';
import {DownOutlined, PoweroffOutlined, UserOutlined} from '@ant-design/icons';
import {type MenuProps, message} from 'antd';
import {Dropdown, Space} from 'antd';
import './index.scss'
import {STORAGE} from "@/utils/constants.ts";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a>
                用户中心
            </a>
        ),
        icon: <UserOutlined />,
        disabled: false
    },
    {
        key: '2',
        label: (
            <a>
                退出登录
            </a>
        ),
        icon: <PoweroffOutlined />,
        disabled: false
    },
];

interface HeaderCProps {
    username?: string
}

function logout() {
    localStorage.removeItem(STORAGE.ACCESS_TOKEN);
    localStorage.removeItem(STORAGE.USER)
    // message.info(`退出登录`);
    window.location.reload()
}

const onClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
        case '1':
            message.info(`用户中心`);
            break;
        case '2':
            logout()
            break;
    }
};


const HeaderC: React.FC<HeaderCProps> = ({username}) => (
    <div className='headerC'>
        <Dropdown menu={{items, onClick}} className='dropdown'>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    欢迎您{username}
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    </div>

);

export default HeaderC;