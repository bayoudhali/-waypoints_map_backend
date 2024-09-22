import { Request, Response } from "express";
import { routeService } from "../services/route.service";

class RouteController {
  getAllRoutes(req: Request, res: Response): void {
    const routes = routeService.getRoutes();
    res.json(routes);
  }

  getRouteById(req: Request, res: Response): void {
    const { id } = req.params;
    const route = routeService.getRouteById(parseInt(id));
    if (route) {
      res.json(route);
    } else {
      res.status(404).json({ message: "Route not found" });
    }
  }

  createRoute(req: Request, res: Response): void {
    const { id, name, waypoints } = req.body;
    const newRoute = routeService.createRoute({ id, name, waypoints });
    res.status(201).json(newRoute);
  }

  updateRoute(req: Request, res: Response): void {
    const { id } = req.params;
    const updatedRoute = req.body;
    const result = routeService.updateRoute(parseInt(id), updatedRoute);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Route not found" });
    }
  }

  deleteRoute(req: Request, res: Response): void {
    const { id } = req.params;
    const result = routeService.deleteRoute(parseInt(id));
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Route not found" });
    }
  }
}

export const routeController = new RouteController();
