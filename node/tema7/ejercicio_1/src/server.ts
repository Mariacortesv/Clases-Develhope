import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

const planets: Planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
];

app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});

app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));

  if (!planet) {
    res.status(404).json({ error: "Planet not found" });
    return;
  }

  res.status(200).json(planet);
});

const server = app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

server.on("error", (err: NodeJS.ErrnoException) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use.`);
  } else {
    console.error("Error starting server:", err.message);
  }
});
