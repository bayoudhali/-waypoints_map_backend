import { Route } from "../types/routes.type";

let routes: Route[] = [
  {
    id: "1",
    name: "My First Route",
    waypoints: [
      { lat: 40.4381311, lng: -3.8196196 },
      { lat: 42.7576862, lng: 1.5082874 },
    ],
  },
];

class RouteService {
  getRoutes(): Route[] {
    return routes;
  }

  getRouteById(id: string): Route | undefined {
    return routes.find((route) => route.id === id);
  }

  createRoute(route: Route): Route {
    routes.push(route);
    return route;
  }

  updateRoute(id: string, updatedRoute: Partial<Route>): Route | null {
    const routeIndex = routes.findIndex((route) => route.id === id);
    if (routeIndex === -1) return null;

    routes[routeIndex] = { ...routes[routeIndex], ...updatedRoute };
    return routes[routeIndex];
  }

  deleteRoute(id: string): boolean {
    const routeIndex = routes.findIndex((route) => route.id === id);
    if (routeIndex === -1) return false;

    routes.splice(routeIndex, 1);
    return true;
  }
}

export const routeService = new RouteService();
