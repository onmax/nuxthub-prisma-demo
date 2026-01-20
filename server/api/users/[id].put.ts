import { db } from 'hub:db'

export default eventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  const body = await readBody(event)
  const user = await db.user.update({ where: { id }, data: body })
  return user
})
