import { Request, Response } from "express";
import Joi from "joi";

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets: Planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" },
];

const getAll = (req: Request, res: Response) => {
  res.status(200).json(planets);
};

const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));

  res.status(200).json(planet);
};

// JOI aplicacion

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().required(),
});

const create = (req: Request, res: Response) => {
  const { id, name } = req.body;
  const newPlanet: Planet = { id, name };

  //Validar schema
  const validateNewPlanet = planetSchema.validate(newPlanet);

  if (validateNewPlanet.error) {
    return res
      .status(400)
      .json({ msg: validateNewPlanet.error.details[0].message });
  } else {
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: "planet created" });
  }
};

const updateById = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

  res.status(200).json({ msg: "planet updated" });
};

const deleteById = (req: Request, res: Response) => {
  const { id } = req.params;

  planets = planets.filter((p) => p.id !== Number(id));

  res.status(200).json({ msg: "planet deleted" });
};

const createImage = (req: Request, res: Response) => {
  console.log(req.file);
  const { id } = req.params;
  const fileName = req.file?.path;

  if (fileName) {

    res.status(201).json({ msg: "planet image uploaded successfully" });
  } else {
    res.status(400).json({ msg: "Planet failed to upload" });
  }

  // crear carpeta uploads
};

export { getAll, getOneById, create, updateById, deleteById, createImage };
