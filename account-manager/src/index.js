const Fastify = require("fastify");
const { middleware } = require("supertokens-node/framework/fastify");
const SuperTokens = require("../supertokens.config");

const fastify = Fastify();

// Register Supertokens middleware
fastify.register(middleware);

// Define your routes here...
fastify.register(require("./routes/userRoutes"));
fastify.register(require("./routes/accountRoutes"));

// Start server
fastify.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Account Manager running on http://localhost:3000");
});
