import Dashboard from "./Layout/Dashboard"
import Home from "./Layout/Home"
import LoginRegistr from "./Layout/LoginRegistr"
import { DASHBOARD_PAGE, HOME, LOGIN_REGISTR_PAGE } from "./utils/consts"

export const publicRoutes = [
    {
        path: HOME,
        component: <Home/> 
    },
    {
        path: LOGIN_REGISTR_PAGE,
        component: <LoginRegistr/>
    }
]


export const privateRoutes = [
    {
        path: DASHBOARD_PAGE,
        component: <Dashboard/>
    }
]
