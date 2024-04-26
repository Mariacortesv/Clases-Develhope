// EJERCICIOS 1 y 2 (en el 2 habia que eactualizar el 1)

import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv"
import Joi from "joi"

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(morgan("dev"));

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
];

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

//GET /api/planets: return all planets (JSON) with 200
app.get("/api/planets", (req, res) => {
  res.status(200).json(planets);
});


// GET /api/planets/:id: return a planet (JSON) by id with 200
app.get("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));

  if (!planet) {
    return res.status(404).json({ error: "Planet not found" });
  }

  res.status(200).json(planet);
});

//POST /api/planets: create a planet, return only 201 code and a success JSON with key msg
app.post("/api/planets", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { name } = req.body;
  const id = planets.length + 1;
  planets.push({ id, name });

  res.status(201).json({ msg: "Planet created" });
});

//PUT /api/planets/:id: update a planet by id, return only 200 code and a success JSON with key msg
app.put("/api/planets/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const schema = Joi.object({
    name: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const planetIndex = planets.findIndex((p) => p.id === Number(id));
  if (planetIndex === -1) {
    return res.status(404).json({ error: "Planet not found" });
  }

  planets[planetIndex].name = name;

  res.status(200).json({ msg: "Planet updated" });
});

//DELETE /api/planets/:id: delete a planet by id, return only 200 code and a success JSON with key msg
app.delete("/api/planets/:id", (req, res) => {
  const { id } = req.params;

  const planetIndex = planets.findIndex((p) => p.id === Number(id));
  if (planetIndex === -1) {
    return res.status(404).json({ error: "Planet not found" });
  }

  planets.splice(planetIndex, 1);

  res.status(200).json({ msg: "Planet deleted" });
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
