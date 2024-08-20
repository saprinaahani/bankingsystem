const { registerUser, loginUser } = require('../controllers/userController');

async function userRoutes(fastify, options) {
  fastify.post('/register', registerUser);
  fastify.post('/login', loginUser);
}

module.exports = userRoutes;
