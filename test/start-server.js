require('babel-core/register');
const createTestServer = require('./server').default;

createTestServer(4001);
