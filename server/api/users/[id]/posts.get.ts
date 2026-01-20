import { db } from 'hub:db'

export default eventHandler(async (event) => {
  const userId = Number(getRouterParam(event, 'id'))
  return db.post.findMany({ where: { authorId: userId } })
})
