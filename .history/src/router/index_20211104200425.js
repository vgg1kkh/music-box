import { lazy } from "react"

// import Discover from "@/pages/discover"
import Friends from "@/pages/friends"
import Mine from "@/pages/mine"

const Discover = lazy(()=>import("@/pages/discover"))
const Friends = lazy(()=>import("@/pages/friends"))
const Mine = lazy(()=>import("@/pages/mine"))
const routes = [
    {
        path:"/discover",
        component: Discover
    },
    {
        path:"/friends",
        component: Friends
    },
    {
        path:"/mine",
        component: Mine
    },
    {
        path:"/mall",
        component: Discover
    }
]

export default routes