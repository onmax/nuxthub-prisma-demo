import { db } from 'hub:db'

export default eventHandler(async (event) => {
  const id = Number(getRouterParam(event, 'id'))
  const post = await db.post.findUnique({ where: { id } })
  if (!post) throw createError({ statusCode: 404, message: 'Post not found' })
  return post
})
