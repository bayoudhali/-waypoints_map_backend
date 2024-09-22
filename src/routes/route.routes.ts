import { Router } from "express";
import { routeController } from "../controllers/route.controller";

const router = Router();

router.get("/routes", routeController.getAllRoutes);
router.get("/routes/:id", routeController.getRouteById);
router.post("/routes", routeController.createRoute);
router.put("/routes/:id", routeController.updateRoute);
router.delete("/routes/:id", routeController.deleteRoute);

export default router;
