
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "@/store"
import initialRouterList from "@/router"

const router = createBrowserRouter(initialRouterList)

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App


