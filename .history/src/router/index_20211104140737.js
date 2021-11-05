import Discover from "@/pages/discover"
import Friends from "@/pages/friends"
import Mine from "@/pages/mine"
const routes = [
    {
        path:"/discover",
        component: Discover
    },
    {
        path:"/friends",
        component: Discover
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