import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  // return c.text('Hello Hono!')
  return c.html('<h1>Hello Hono!</h1>')
})

const port = process.env.PORT ? +process.env.PORT : 3000;
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
