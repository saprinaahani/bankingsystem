const { processTransaction } = require('../controllers/paymentController');

async function paymentRoutes(fastify, options) {
  fastify.post('/send', processTransaction);
  fastify.post('/withdraw', processTransaction);
}

module.exports = paymentRoutes;
