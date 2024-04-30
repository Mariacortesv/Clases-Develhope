import express from "express";
import { getAll, getOneById, create, updateById, deleteById } from "./controllers/ejercicio3.js";
import { logIn } from "./controllers/users.js";

const app = express();
const port = process.env.PORT || 3004;

app.use(express.json());

// GET /api/planets
app.get("/api/planets", getAll);

// GET /api/planets/:id
app.get("/api/planets/:id", getOneById);

// POST /api/planets
app.post("/api/planets", create);

// PUT /api/planets/:id
app.put("/api/planets/:id", updateById);

// DELETE /api/planets/:id
app.delete("/api/planets/:id", deleteById);

app.post("/api/users/login", logIn)

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
