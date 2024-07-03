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

export async function postComment(post: Post, formData: HTMLFormElement){
  const author = await db.user.findFirst({
    where: {
      username: 'anabeatriz_dev'
    }
  })

  await db.comment.create({
    data: {
      text: formData.get('text'),
      authorId: author!.id,
      postId: post.id
    }
  })

  revalidatePath("/")
  revalidatePath(`/${post.slug}`)
}