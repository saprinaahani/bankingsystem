const { EmailPassword } = require("supertokens-node/recipe/emailpassword");
const { Session } = require("supertokens-node/recipe/session");

async function registerUser(request, reply) {
    const { email, password } = request.body;
    
    try {
        // Supertokens handles password hashing and user creation
        await EmailPassword.signUp({
            email,
            password
        });
        reply.send({ message: 'User registered successfully' });
    } catch (err) {
        reply.status(500).send({ error: err.message });
    }
}

async function loginUser(request, reply) {
    const { email, password } = request.body;
    
    try {
        // Authenticate user with Supertokens
        const response = await EmailPassword.signIn({
            email,
            password
        });

        // Create a session for the user
        const session = await Session.createNewSession(response.userId, response.accessToken);
        reply.send({ sessionId: session.getSessionId() });
    } catch (err) {
        reply.status(401).send({ message: 'Invalid credentials' });
    }
}

async function logoutUser(request, reply) {
    try {
        // End the session
        await request.session.revokeSession();
        reply.send({ message: 'Logged out successfully' });
    } catch (err) {
        reply.status(500).send({ error: err.message });
    }
}

module.exports = { registerUser, loginUser, logoutUser };
