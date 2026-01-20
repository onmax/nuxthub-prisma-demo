# NuxtHub Prisma Demo

Demo showcasing NuxtHub database with Prisma ORM.

## Setup

```bash
pnpm install
pnpm db:generate
pnpm dev
```

## Schema

- **User**: id, name, email, createdAt, posts[]
- **Post**: id, title, content, authorId (FK), createdAt

## API Endpoints

- `GET/POST /api/users` - list/create users
- `GET/PUT/DELETE /api/users/[id]` - read/update/delete user
- `GET /api/users/[id]/posts` - get user's posts
- `GET/POST /api/posts` - list/create posts
- `GET/PUT/DELETE /api/posts/[id]` - read/update/delete post
