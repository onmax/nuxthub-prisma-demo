import { db } from 'hub:db'

export default eventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  const body = await readBody(event)
  const post = await db.post.update({ where: { id }, data: body })
  return post
})
