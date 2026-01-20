import { db } from 'hub:db'

export default eventHandler(async () => {
  return db.post.findMany()
})
