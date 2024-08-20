const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { Session } = require('supertokens-node/recipe/session');

// Process a transaction
async function processTransaction(request, reply) {
    // Retrieve user session
    const session = request.session;

    if (!session) {
        return reply.status(401).send({ message: 'Unauthorized' });
    }

    const { amount, toAddress, status } = request.body;

    try {
        // Call the core transaction process function
        await processTransactionCore({ amount, toAddress, status });

        // Log transaction in the database
        await prisma.transaction.create({
            data: {
                amount,
                toAddress,
                status,
                userId: session.getUserId() // Associate transaction with the user
            }
        });

        reply.send({ message: 'Transaction processed successfully' });
    } catch (error) {
        reply.status(500).send({ message: 'Error processing transaction', error: error.message });
    }
}

// Core function to simulate transaction processing
async function processTransactionCore(transaction) {
    return new Promise((resolve, reject) => {
        console.log('Transaction processing started for:', transaction);
        // Simulate long running process
        setTimeout(() => {
            console.log('Transaction processed for:', transaction);
            resolve(transaction);
        }, 30000); // 30 seconds
    });
}

module.exports = { processTransaction };
