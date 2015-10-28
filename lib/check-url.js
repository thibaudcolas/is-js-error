import vo from 'vo';
import nightmare from 'nightmare';

function* checkURL(url) {
    const night = nightmare({ show: false });

    const link = yield night.goto(url)
        .evaluate(() => document.getElementsByTagName('a')[0].href);

    yield night.end();

    return link;
}

export default vo(checkURL);
