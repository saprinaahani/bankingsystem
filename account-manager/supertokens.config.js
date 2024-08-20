const SuperTokens = require("supertokens-node");
const { EmailPassword, Session } = require("supertokens-node/recipe");

SuperTokens.init({
  supertokens: {
    connectionURI: process.env.SUPERTOKENS_CONNECTION_URI,
  },
  appInfo: {
    appName: "AccountManagerApp",
    apiDomain: process.env.SUPERTOKENS_API_DOMAIN,
    websiteDomain: process.env.SUPERTOKENS_WEBSITE_DOMAIN,
  },
  recipeList: [
    EmailPassword.init(),
    Session.init(),
  ],
});

module.exports = SuperTokens;
