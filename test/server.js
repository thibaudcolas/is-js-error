import http from 'http';

/* eslint-disable no-var */

function generateTestCode(hasError, hasWait) {
    var code;

    if (hasError) {
        if (hasWait) {
            code = 'setTimeout(function () { throw new Error(); }, 2000);';
        } else {
            code = 'throw new Error();';
        }
    } else {
        code = '';
    }

    return code;
}

function createTestServer(port = process.env.PORT || 4000) {
    var server = http.createServer((req, res) => {
        var hasError = req.url.indexOf('/error') !== -1;
        var hasWait = req.url.indexOf('wait') !== -1;

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <html>
                <body>
                    <script>
                        ${generateTestCode(hasError, hasWait)}
                        document.write('test');
                    </script>
                </body>
            </html>
        `);
    }).listen(port);

    return server;
}

export default createTestServer;
