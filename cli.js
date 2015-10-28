import meow from 'meow';
import logSymbols from 'log-symbols';
import isJSError from './lib/is-js-error';

const cli = meow(`
    Example
      $ is-js-error thib.me
      ${logSymbols.success} No
`);

if (cli.input.length === 0) {
    console.error('Specify a URL');
    process.exit(1);
}

isJSError(cli.input[0], (err, result) => {
    if (err) return console.log(err);

    console.log(result);
});
