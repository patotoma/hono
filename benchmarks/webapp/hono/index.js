import { Hono } from '../../../dist'
import { RegExpRouter } from '../../../dist/router/reg-exp-router'
//import { Hono } from 'hono'

const hono = new Hono({ routerClass: RegExpRouter })
hono.get('/user', (c) => c.text('User'))
hono.get('/user/comments', (c) => c.text('User Comments'))
hono.get('/user/avatar', (c) => c.text('User Avatar'))
hono.get('/user/lookup/email/:address', (c) => c.text('User Lookup Email Address'))
hono.get('/event/:id', (c) => c.text('Event'))
hono.get('/event/:id/comments', (c) => c.text('Event Comments'))
hono.post('/event/:id/comments', (c) => c.text('POST Event Comments'))
hono.post('/status', (c) => c.text('Status'))
hono.get('/very/deeply/nested/route/hello/there', (c) => c.text('Very Deeply Nested Route'))
hono.get('/user/lookup/username/:username', (c) => {
  return c.text(`Hello ${c.req.param('username')}`)
})

hono.fire()
