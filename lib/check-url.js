import vo from 'vo';
import nightmare from 'nightmare';

function* checkURL(url) {
    const night = nightmare({ show: false });
    let isJSError = false;

    night.on('page-error', () => {
        isJSError = true;
    });

    yield night.goto(url).end();

    return isJSError;
}

export default vo(checkURL);
