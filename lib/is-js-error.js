import nightmare from 'nightmare';
import vo from 'vo';

function* checkSiteError(url) {
    const night = nightmare({ show: false });

    const link = yield night.goto(url)
        .evaluate(() => document.getElementsByTagName('a')[0].href);

    yield night.end();

    return link;
}

export default vo(checkSiteError);
