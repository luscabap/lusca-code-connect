import db from "../../../../../../prisma/db";

type params = {
  id: string
}

interface IGetReplies {
  _request: any,
  params: params
}

export async function GET (_request: IGetReplies, { params }: IGetReplies) {
  const dataReplies = await db.comment.findMany({
    where: {
      parentId: parseInt(params.id)
    },
    include: {
      author: true
    }
  })

  return Response.json(dataReplies);
}