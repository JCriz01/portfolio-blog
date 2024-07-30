//import { PrismaClient } from "@prisma/client";
//import { v4 as uuidv4 } from "uuid";
//const prisma = new PrismaClient();
import { Request, Response } from "express";
//create user
export const create_user = async (req: Request, res: Response) => {
  console.log(req.body);

  res.status(201).json({ message: "User created" });
};
