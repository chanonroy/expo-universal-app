import About from "../screens/about";
import Home from "../screens/home";

interface RouteConfig {
    path: string
    component: () => JSX.Element
    routes?: RouteConfig
}

const routes: RouteConfig[] = [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About,
    }
];

export default routes
