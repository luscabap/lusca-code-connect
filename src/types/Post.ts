import { AuthorProps } from "./AuthorProps"
import { CommentsProps } from "./CommentsProps"

export type Post = {
  id: number,
  cover: string,
  title: string,
  slug: string,
  body: string,
  markdown: string,
  author: AuthorProps,
  likes: number,
  comments: CommentsProps[]
}