import { Link, Outlet } from 'react-router-dom'
import './app.css'


function App() {
  return <>
    <div className='lmn-d-flex lmn-flex-column'>
      <div className='lmn-d-flex lmn-justify-content-around' style={{ width: '100%', marginBottom: '50px' }}>
        <Link to="/useReducer">useReducer</Link>
        <Link to="/useMemo">useMemo</Link>
        <Link to="/memo">memo</Link>
        <Link to="/useCallback">useCallback</Link>
        <Link to="/forwardRef">forwardRef</Link>
        <Link to="/useInperativeHandle">useInperativeHandle</Link>
        <Link to="/zustand">zustand</Link>
      </div>
      <div><Outlet /></div>
    </div>

  </>

}

export default App
