import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'
//根据有无token决定能否跳转，angular中的路由守卫
function AuthRoute({ children }) {
  const token = getToken()
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to={'/login'} replace />
  }
}
AuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthRoute