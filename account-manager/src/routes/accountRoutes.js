const { getAccounts, getPaymentHistory } = require('../controllers/accountController');

async function accountRoutes(fastify, options) {
  fastify.get('/accounts', getAccounts);
  fastify.get('/payment-history/:accountId', getPaymentHistory);
}

module.exports = accountRoutes;
