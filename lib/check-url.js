import vo from 'vo';
import got from 'got';
import nightmare from 'nightmare';

function* checkIsLive(url) {
    yield got(url, { timeout: 1000, retries: 1 });
}

function* checkHasError(url) {
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

    night.on('page-error', (errorMessage, errorStack) => {
        isJSError = true;
        console.log(errorMessage, errorStack);
    });

    yield night.goto(url).wait(1000).end();

    return !isLoaded || isLoadError || isJSError;
}

export default vo([checkIsLive, checkHasError]);
