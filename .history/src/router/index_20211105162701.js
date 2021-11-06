import { lazy } from "react"
import { Redirect } from "react-router-dom"

// import Discover from "@/pages/discover"
// import Friends from "@/pages/friends"
// import Mine from "@/pages/mine"

const Discover = lazy(()=>import("@/pages/discover"))
const Friends = lazy(()=>import("@/pages/friends"))
const Mine = lazy(()=>import("@/pages/mine"))
const Recommend = lazy(()=>import())
const routes = [
    {
        path:"/discover",
        component: Discover,
        routes:[
          {path:"/discover/recommend",
          component:Recommend
        }
        ]
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
    },
    {
        path:"/",
        render: ()=><Redirect to="/discover" />
    }
]

export default routes