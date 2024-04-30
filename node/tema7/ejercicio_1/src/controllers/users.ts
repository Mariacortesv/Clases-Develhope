import * as dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import { db } from "../db";
import jwt from "jsonwebtoken"; 

const logIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await db.one(`SELECT * FROM users WHERE username=$1`, username);
    
    if (user && user.password === password) {
      const payload = {
        id: user.id,
        username,
      };
      
      const { SECRET = "" } = process.env; 
      if (!SECRET) {
        throw new Error("JWT secret key not found in environment variables.");
      }

      const token = jwt.sign(payload, SECRET);

      await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token]);
      res.status(200).json({ id: user.id, username, token });
    } else {
      res.status(400).json({ msg: "Username or password incorrect." });
    }
  } catch (error) {
    res.status(500).json({ msg: "Internal server error." });
  }
};

export { logIn };
