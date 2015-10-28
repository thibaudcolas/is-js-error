import meow from 'meow';
import logSymbols from 'log-symbols';
import normalizeUrl from 'normalize-url';
import isJSError from './lib/is-js-error';

const cli = meow(`
    Example
      $ is-js-error example.com
      ${logSymbols.success} No
`);

if (cli.input.length === 0) {
    console.error('Specify a URL');
    process.exit(1);
}

const normalizeOptions = {
    normalizeProtocol: true,
    stripFragment: false,
    stripWWW: false,
};

const url = normalizeUrl(cli.input[0], normalizeOptions);

isJSError(url, (err, result) => {
    if (err) return console.log(err);

    console.log(result);
});
