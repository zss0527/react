// src/utils/menuHelper.ts
import { menuConfig, type MenuConfig } from '@/config/menuConfig';

/**
 * 根据路径查找菜单项
 * @param path - 路由路径
 * @param menuItems - 菜单配置（可选，默认使用 menuConfig）
 * @returns 菜单项数组（包含父级菜单）
 */
export const findMenuPath = (path: string, menuItems: MenuConfig[] = menuConfig): MenuConfig[] => {
    const result: MenuConfig[] = [];

    const search = (items: MenuConfig[], currentPath: string): boolean => {
        for (const item of items) {
            if (item.key === currentPath) {
                result.push(item);
                return true;
            }

            if (item.children) {
                if (search(item.children, currentPath)) {
                    result.unshift(item);
                    return true;
                }
            }
        }
        return false;
    };

    search(menuItems, path);
    return result;
};

/**
 * 将菜单路径转换为面包屑格式
 * @param path - 路由路径
 * @returns 面包屑项数组
 */
export const pathToBreadcrumb = (path: string) => {
    const menuPath = findMenuPath(path);

    return menuPath.map(item => ({
        title: item.label,
        key: item.key,
    }));
};
