"use server"

import { Post } from "@/types/Post";
import db from "../../prisma/db";
import { Prisma } from "@prisma/client";

export async function incrementThumbsUp(post: Post){

  await db.post.update({
    where: {
      id: post.id
    },
    data: {
      likes: {
        increment: 1
      }
    }
  })
}