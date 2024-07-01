"use server"

import { Post } from "@/types/Post";
import db from "../../prisma/db";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

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

  revalidatePath("/")
  revalidatePath(`/${post.slug}`)
}