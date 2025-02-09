import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import UseReducerLab from "../lab/userReducerLab";
import UseMemoLab from "../lab/useMemoLab";
import MemoLab from "../lab/memoLab";
import UseCallback from "../lab/useCallbackLab";
import ForwardRefLab from "../lab/forwardRefLab";
import UseInperativeHandleLab from "../lab/useInperativeHandleLab";
import ZustandLab from "../lab/zustandLab";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/useReducer",
        element: <UseReducerLab />,
      },
      {
        path: "/useMemo",
        element: <UseMemoLab />,
      },
      {
        path: "/memo",
        element: <MemoLab />
      },
      {
        path: "/useCallback",
        element: <UseCallback />
      },
      {
        path: "/forwardRef",
        element: <ForwardRefLab />
      },
      {
        path: "/useInperativeHandle",
        element: <UseInperativeHandleLab />
      },
      {
        path: "/zustand",
        element: <ZustandLab />
      }
    ]
  },

]);

export default router;