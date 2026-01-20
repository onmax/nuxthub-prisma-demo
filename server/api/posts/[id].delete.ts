import { db } from 'hub:db'

export default eventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  await db.post.delete({ where: { id } })
  return { success: true }
})
