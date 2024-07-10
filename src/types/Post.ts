import { AuthorProps } from "./AuthorProps"
import { CommentsProps } from "./CommentsProps"

export type Post = {
  id: number,
  cover: string,
  title: string,
  slug: string,
  body: string,
  markdown: string,
  createdAt: Date,
  updatedAt: Date,
  authorId: number,
  likes: number,
  author: AuthorProps,
  comments: CommentsProps[]
}