import { db } from 'hub:db'

export default eventHandler(async (event) => {
  const body = await readBody(event)
  return db.post.create({ data: body })
})
