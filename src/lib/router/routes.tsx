import type { PathRouteProps } from "react-router-dom";

import Landing from "lib/pages/landing";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Landing />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
