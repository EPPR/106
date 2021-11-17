const Fastify = require("fastify");
const fastify = Fastify();
fastify.register(require('fastify-formbody'));
fastify.post('/', async function(req, reply){
    reply.send({
        type: "POST",
        data: req.body,
        userAgent: req.headers["user-agent"]
    })
})
fastify.get('/', async function(req, reply){
    reply.send({
        type: "GET",
        userAgent: req.headers["user-agent"]
    })
})
fastify.listen(3000, (err) => {
    if(err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`)
})