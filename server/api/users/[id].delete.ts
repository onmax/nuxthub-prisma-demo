import { db } from 'hub:db'

export default eventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  await db.user.delete({ where: { id } })
  return { success: true }
})
