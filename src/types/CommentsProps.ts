import { AuthorProps } from "./AuthorProps"
import { Post } from "./Post"

export type CommentsProps = {
  id: number,
  text: string,
  createdAt: Date,
  updatedAt: Date,
  authorId: number,
  postId: number,
  parentId: number | null,
  author: AuthorProps,
  children?: CommentsProps[]
}