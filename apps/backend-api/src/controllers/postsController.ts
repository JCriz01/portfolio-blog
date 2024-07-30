import { PrismaClient } from "@prisma/client";
//import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();
import { Request, Response } from "express";

//fetch all posts
export const all_posts = (req: Request, res: Response) => {
  const posts = prisma.post.findMany();

  return res.json(posts);
};

//create post
export const create_post = (req: Request, res: Response) => {
  console.log(req.body);
  //const { title, content } = req.body;
};
