import Nightmare from 'nightmare';
import vo from 'vo';

vo(function* () {
    const nightmare = Nightmare({ show: true });
    const link = yield nightmare
        .goto('http://yahoo.com')
        .type('input[title="Search"]', 'github nightmare')
        .click('.searchsubmit')
        .wait('.ac-21th')
        .screenshot('test.png')
        .evaluate(() => document.getElementsByClassName('ac-21th')[0].href);

    yield nightmare.end();

    return link;
})((err, result) => {
    if (err) return console.log(err);

    console.log(result);
});
