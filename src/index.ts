import { Hono } from 'hono'
import home from './home.html'

const app = new Hono<{ Bindings: CloudflareBindings }>()

app.get('/', (c) => {
  return c.html(home)
})

app.get('/message', (c) => {
  return c.text('Hello Hono!')
})

export default app
