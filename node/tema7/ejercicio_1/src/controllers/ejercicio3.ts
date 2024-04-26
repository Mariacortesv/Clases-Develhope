import { Request, Response } from "express";
import Joi from "joi";
import pgPromise from "pg-promise"

const db = pgPromise({})("mariacortes://postgres:postgres@localhost5432/postgres")
console.log(db)

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

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));

  if (!planet) {
    return res.status(404).json({ error: "Planet not found" });
  }

  res.status(200).json(planet);
};

const create = (req: Request, res: Response) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { name } = req.body;
  const id = planets.length + 1;
  planets.push({ id, name });

  res.status(201).json({ msg: "Planet created" });
};

const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  const schema = Joi.object({
    name: Joi.string().required(),
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
};

const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;

  const planetIndex = planets.findIndex((p) => p.id === Number(id));
  if (planetIndex === -1) {
    return res.status(404).json({ error: "Planet not found" });
  }

  planets.splice(planetIndex, 1);

  res.status(200).json({ msg: "Planet deleted" });
};

export { getAll, getOneById, create, updateById, deleteById };
