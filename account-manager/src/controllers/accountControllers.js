const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getAccounts(request, reply) {
  const userId = request.user.id; // Assuming user is authenticated and user ID is available
  const accounts = await prisma.paymentAccount.findMany({ where: { userId } });
  reply.send(accounts);
}

async function getPaymentHistory(request, reply) {
  const { accountId } = request.params;
  const paymentHistory = await prisma.paymentHistory.findMany({ where: { paymentAccountId: parseInt(accountId) } });
  reply.send(paymentHistory);
}

module.exports = { getAccounts, getPaymentHistory };
