import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";

interface RequireAuthProps {
    allowed: boolean;
    redirectTo: string;
    permission?: string;
    children: React.ReactNode;
}

function RequireAuth({allowed, redirectTo, permission, children}: RequireAuthProps) {
    const {token, permissions} = useSelector((state:any) => state.authSlice)
    const isLogin = !!token
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (!isLogin && allowed) {
            navigate(redirectTo, { state: { from: location } })
            return
        }

        if (permission && permissions && permissions.length > 0) {
            const hasPermission = permissions.some((p: any) => {
                const path = `/${p.resource}/${p.action}`
                return path === permission || location.pathname.startsWith(path)
            })

            if (!hasPermission) {
                navigate('/403')
            }
        }
    }, [allowed, isLogin, redirectTo, permission, permissions, location, navigate])

    if (!isLogin && allowed) {
        return null
    }

    if (permission && permissions && permissions.length > 0) {
        const hasPermission = permissions.some((p: any) => {
            const path = `/${p.resource}/${p.action}`
            return path === permission || location.pathname.startsWith(path)
        })

        if (!hasPermission) {
            return null
        }
    }

    return allowed === isLogin ? <>{children}</> : null;
}

export default RequireAuth;
