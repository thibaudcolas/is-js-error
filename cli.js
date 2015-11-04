import 'babel-polyfill';

import meow from 'meow';
import logSymbols from 'log-symbols';
import parseURL from './lib/parse-url';
import checkURL from './lib/check-url';

const cli = meow(`
    Example
      $ is-js-error example.com
      ${logSymbols.success} OK
`);

if (cli.input.length === 0) {
    console.error('Specify a URL');
    process.exit(1);
}

const url = parseURL(cli.input[0]);

checkURL(url, (err, hasError) => {
    console.log(!hasError ? `${logSymbols.success} OK` : `${logSymbols.error} KO`);
    process.exit(!hasError ? 0 : 2);
});
