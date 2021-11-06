import { lazy } from "react"
import { Redirect } from "react-router-dom"

// import Discover from "@/pages/discover"
// import Friends from "@/pages/friends"
// import Mine from "@/pages/mine"

const Discover = lazy(()=>import("@/pages/discover"))
const Friends = lazy(()=>import("@/pages/friends"))
const Mine = lazy(()=>import("@/pages/mine"))
const routes = [
    {
        path:"/discover",
        component: Discover,
        routes:[
            {
                path: '/discover',
                exact: true,
                render: () => <Redirect to="/discover/recommend" />,
              },
              { path: '/discover/recommend', component: JMRecommend },
              { path: '/discover/ranking', component: JMToplist },
              {
                path: '/discover/ranking',
                component: JMToplist,
              },
              { path: '/discover/album', component: JMAlbum },
              { path: '/discover/djradio', component: JMDjradio },
              { path: '/discover/artist', component: JMArtist },
              { path: '/discover/songs', component: JMSongs },
              { path: '/discover/song', component: JMSongDetail },
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