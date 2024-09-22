import express from "express";
import dotenv from "dotenv";
import routeRoutes from "./src/routes/route.routes";

// Load environment variables from .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Use the route routes
app.use("/api", routeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
