export type CommentsProps = {
  id: number,
  text: string,
  createdAt: Date,
  updatedAt: Date,
  authorId: number,
  postId: number,
  parentId: number | null
}