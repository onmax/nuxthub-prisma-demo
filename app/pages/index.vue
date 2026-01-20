<script setup lang="ts">
interface User { id: number; name: string; email: string; createdAt: string }
interface Post { id: number; title: string; content: string; authorId: number; createdAt: string }

const { data: users, refresh: refreshUsers } = await useFetch<User[]>('/api/users')
const { data: posts, refresh: refreshPosts } = await useFetch<Post[]>('/api/posts')

const newUser = ref({ name: '', email: '' })
const newPost = ref({ title: '', content: '', authorId: '' })

async function createUser() {
  await $fetch('/api/users', { method: 'POST', body: newUser.value })
  newUser.value = { name: '', email: '' }
  refreshUsers()
}

async function deleteUser(id: number) {
  await $fetch(`/api/users/${id}`, { method: 'DELETE' })
  refreshUsers()
  refreshPosts()
}

async function createPost() {
  await $fetch('/api/posts', { method: 'POST', body: { ...newPost.value, authorId: Number(newPost.value.authorId) } })
  newPost.value = { title: '', content: '', authorId: '' }
  refreshPosts()
}

async function deletePost(id: number) {
  await $fetch(`/api/posts/${id}`, { method: 'DELETE' })
  refreshPosts()
}
</script>

<template>
  <div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: system-ui;">
    <h1>NuxtHub Prisma Demo</h1>

    <section style="margin-bottom: 40px;">
      <h2>Users</h2>
      <form @submit.prevent="createUser" style="display: flex; gap: 10px; margin-bottom: 20px;">
        <input v-model="newUser.name" placeholder="Name" required style="padding: 8px;">
        <input v-model="newUser.email" placeholder="Email" type="email" required style="padding: 8px;">
        <button type="submit" style="padding: 8px 16px;">Add User</button>
      </form>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #f0f0f0;">
            <th style="padding: 10px; text-align: left;">ID</th>
            <th style="padding: 10px; text-align: left;">Name</th>
            <th style="padding: 10px; text-align: left;">Email</th>
            <th style="padding: 10px; text-align: left;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px;">{{ user.id }}</td>
            <td style="padding: 10px;">{{ user.name }}</td>
            <td style="padding: 10px;">{{ user.email }}</td>
            <td style="padding: 10px;">
              <button @click="deleteUser(user.id)" style="color: red;">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Posts</h2>
      <form @submit.prevent="createPost" style="display: flex; gap: 10px; margin-bottom: 20px;">
        <input v-model="newPost.title" placeholder="Title" required style="padding: 8px;">
        <input v-model="newPost.content" placeholder="Content" required style="padding: 8px;">
        <input v-model="newPost.authorId" placeholder="Author ID" type="number" required style="padding: 8px; width: 100px;">
        <button type="submit" style="padding: 8px 16px;">Add Post</button>
      </form>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #f0f0f0;">
            <th style="padding: 10px; text-align: left;">ID</th>
            <th style="padding: 10px; text-align: left;">Title</th>
            <th style="padding: 10px; text-align: left;">Content</th>
            <th style="padding: 10px; text-align: left;">Author ID</th>
            <th style="padding: 10px; text-align: left;">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id" style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px;">{{ post.id }}</td>
            <td style="padding: 10px;">{{ post.title }}</td>
            <td style="padding: 10px;">{{ post.content }}</td>
            <td style="padding: 10px;">{{ post.authorId }}</td>
            <td style="padding: 10px;">
              <button @click="deletePost(post.id)" style="color: red;">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
