import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {useState} from "react";
import logo from '@/assets/logo.png'
import './index.scss'
import {useNavigate} from "react-router-dom";

interface NavMenuProps {
    isCollapsed: boolean;
    menuData: MenuProps['items'];
}

const NavMenu: React.FC<NavMenuProps> = ({isCollapsed, menuData}) => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>(['/'])
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const navigate = useNavigate()

    const handleClick: MenuProps['onClick'] = (info) => {
        console.log('click ', info);
        navigate(info.key)
    };

    return (
        <div className='navMenu'>
            <div className='logo'>
                <img src={logo} alt='logo' width={18} />
                <h1>智牧云</h1>
            </div>
            <Menu
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                onOpenChange={(keys) => setOpenKeys(keys)}
                onSelect={(info) => setSelectedKeys([info.key])}
                mode="inline"
                theme="dark"
                inlineCollapsed={isCollapsed}
                items={menuData}
                onClick={handleClick}
            />
        </div>
    );
};

export default NavMenu;
