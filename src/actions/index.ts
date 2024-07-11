"use server"

import { Post } from "@/types/Post";
import { revalidatePath } from "next/cache";
import db from "../../prisma/db";
import { CommentsProps } from "@/types/CommentsProps";

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
};

export async function postComment(post: Post, formData: FormData){
  const author = await db.user.findFirst({
    where: {
      username: 'anabeatriz_dev'
    }
  })

  await db.comment.create({
    data: {
      text: formData.get('text') as string,
      authorId: author!.id,
      postId: post.id
    }
  })

  revalidatePath("/")
  revalidatePath(`/${post.slug}`)
};

export async function postReply(parent: CommentsProps, formData: FormData){
  const author = await db.user.findFirst({
    where: {
      username: 'anabeatriz_dev'
    }
  })

  const post = await db.post.findFirst({
    where: {
      id: parent.postId
    }
  })


  await db.comment.create({
    data: {
      text: formData.get('text') as string,
      authorId: author!.id,
      postId: post!.id,
      parentId: parent.parentId ?? parent.id
    }
  })

  revalidatePath("/")
  revalidatePath(`/${post!.slug}`)
}