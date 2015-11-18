import http from 'http';

function createTestServer(port = process.env.PORT || 4000) {
    const server = http.createServer((req, res) => {
        const returnError = req.url.indexOf('/error') !== -1;

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <html>
                <body>
                    <script>
                        ${returnError ? 'throw new Error();' : ''}
                        document.write('test');
                    </script>
                </body>
            </html>
        `);
    }).listen(port);

    return server;
}

export default createTestServer;
