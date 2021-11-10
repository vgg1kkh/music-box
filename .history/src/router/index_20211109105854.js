import { lazy } from "react";
import { Redirect } from "react-router-dom";

// import Discover from "@/pages/discover"
// import Friends from "@/pages/friends"
// import Mine from "@/pages/mine"

const Discover = lazy(() => import("@/pages/discover"));
const Friends = lazy(() => import("@/pages/friends"));
const Mine = lazy(() => import("@/pages/mine"));


//Child component of Recommend
const Recommend = lazy(() => import("@/pages/discover/c-cpn/recommend"));
const TopList = lazy(() => import("@/pages/discover/c-cpn/toplist"));
const PlayList= lazy(()=>import("@/pages/discover/c-cpn/playlist"))
const routes = [
  {
    path: "/discover",
    component: Discover,
    routes: [
      { path: "/discover/recommend", component: Recommend },
      { path: "/discover/toplist", component: TopList },
      { path: "/discover/playlist", component: PlayList },
      { path: "/discover", component: Recommend },
    ],
  },
  {
    path: "/friends",
    component: Friends,
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "/mall",
    component: Discover,
  },
  {
    exact:true,
    path: "/",
    render: () => <Redirect to="/discover" />,
  },
];

export default routes;
