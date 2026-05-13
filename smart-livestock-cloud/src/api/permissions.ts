import http from "@/utils/http.ts";

export function getPermissions() {
    return http.get('/api/permissions')
}

export function getMyPermissions() {
    return http.get('/api/my-permissions')
}


export function getMyPermissionsDetails() {
    return http.get('/api/my-permissions/details')
}