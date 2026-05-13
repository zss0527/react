// src/constants/index.js

// 用户相关常量
export const MAX_LOGIN_ATTEMPTS = 5
export const TOKEN_EXPIRE_TIME = 24 * 60 * 60 * 1000 // 24小时

// API相关常量
export const API_BASE_URL = 'http://localhost:8080/api'
export const API_TIMEOUT = 30000

// 权限常量
export const PERMISSIONS = {
    LIVESTOCK_VIEW: 'livestock:view',
    LIVESTOCK_CREATE: 'livestock:create',
    LIVESTOCK_UPDATE: 'livestock:update',
    LIVESTOCK_DELETE: 'livestock:delete',
    ENVIRONMENT_VIEW: 'environment:view',
    DEVICE_VIEW: 'device:view',
    DEVICE_CONTROL: 'device:control',
}

// 角色常量
export const ROLES = {
    SUPER_ADMIN: 'super_admin',
    BREEDER: 'breeder',
    VIEWER: 'viewer',
}

// 养殖类型常量
export const LIVESTOCK_TYPES = {
    PIG: 'pig',
    CHICKEN: 'chicken',
    CATTLE: 'cattle',
    FISH: 'fish',
}

export const STORAGE = {
    ACCESS_TOKEN: 'smart-livestock-cloud-token',
    USER: 'smart-livestock-cloud-user',
}