import http from "@/utils/http.ts";

export interface LoginData {
    username: string;
    password: string;
}
export function login(data: LoginData) {
    return http.post('/api/login',data)
}