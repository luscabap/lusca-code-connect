import { Post } from "./Post"

export type AuthorProps = {
  id: number,
  name: string,
  username: string,
  avatar: string,
  post?: Post[],
}