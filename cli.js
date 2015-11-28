import 'babel-polyfill';

import meow from 'meow';
import logSymbols from 'log-symbols';
import parseURL from './lib/parse-url';
import checkURL from './lib/check-url';

const cli = meow(`
    Example
      $ is-js-error example.com
      ${logSymbols.success} OK
      $ is-js-error example.com --wait 3000
      ${logSymbols.success} OK

    Options
      --help,      Display this help
      --version,   Display the version number
      --wait [ms], Wait for a given period before reporting no error.
`);

if (cli.input.length === 0) {
    console.error('Specify a URL');
    process.exit(1);
}

const url = parseURL(cli.input[0]);
const maxWait = Math.max(cli.flags.wait, 1000);

checkURL(url, maxWait, (err, results) => {
    if (err) {
        console.log(`${logSymbols.warning} ${err}`);
        process.exit(1);
    } else {
        const hasError = results[1];

        console.log(hasError ? `${logSymbols.error} KO` : `${logSymbols.success} OK`);
        process.exit(hasError ? 2 : 0);
    }
});
