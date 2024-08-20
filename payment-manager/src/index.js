const Fastify = require("fastify");
const { middleware } = require("supertokens-node/framework/fastify");
const SuperTokens = require("../supertokens.config");

const fastify = Fastify();

// Register Supertokens middleware
fastify.register(middleware);

// Define your routes here...
fastify.register(require("./routes/paymentRoutes"));

// Start server
fastify.listen(3002, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Payment Manager running on http://localhost:3002");
});
