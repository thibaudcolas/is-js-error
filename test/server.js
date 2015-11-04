import http from 'http';

function createTestServer(isJSError = false, port = process.env.PORT || 4000) {
    const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <html>
                <body>
                    <script>
                        ${isJSError ? 'throw new Error();' : ''}
                        document.write('test');
                    </script>
                </body>
            </html>
        `);
    }).listen(port);

    return server;
}

export default {
    noErrorTest: createTestServer.bind(null, false),
    errorTest: createTestServer.bind(null, true),
};
