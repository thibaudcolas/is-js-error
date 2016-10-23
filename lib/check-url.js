import vo from 'vo';
import got from 'got';
import nightmare from 'nightmare';

function* checkIsLive(url, maxWait) {
    yield got(url, { timeout: maxWait, retries: 1 });
}

function* checkHasError(url, maxWait) {
    const night = nightmare({ show: false });
    let isJSError = false;
    let isLoaded = false;
    let isLoadError = false;

    night.on('did-finish-load', () => {
        isLoaded = true;
    });

    night.on('did-fail-load', () => {
        isLoadError = true;
    });

    night.on('page', (type, message, stack) => {
        if (type === 'error') {
            isJSError = true;
            console.log(message, stack);
        }
    });

    yield night.goto(url).wait(maxWait).end();

    return !isLoaded || isLoadError || isJSError;
}

export default vo([checkIsLive, checkHasError]);
