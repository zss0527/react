import {lazy} from 'react'

const Role = lazy(() => import("../page/role/index"));
const Device = lazy(() => import("../page/device/index"));
const Report = lazy(() => import("../page/report/index"));
const LiveStock = lazy(() => import("../page/livestock/index"));
const Users = lazy(() => import("../page/user/index"));
const Environment = lazy(() => import("../page/environment/index"));


export const componentMap = {
    "/role": () => Role,
    "/device": () => Device,
    "/report": () => Report,
    "/livestock": () => LiveStock,
    "/users": () => Users,
    "/environment": () => Environment,
}