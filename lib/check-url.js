import vo from 'vo';
import got from 'got';
import nightmare from 'nightmare';

function* checkIsLive(url) {
    yield got(url, { timeout: 1000, retries: 1 });
}

function* checkHasError(url) {
    const night = nightmare({ show: false });
    let isJSError = false;

    night.on('page-error', () => {
        isJSError = true;
    });

    yield night.goto(url).end();

    return isJSError;
}

export default vo([checkIsLive, checkHasError]);
