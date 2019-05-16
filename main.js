const express = require('express');

const app = express();

app.disable('x-powered-by');

app.use((req, res, next) => {
    console.log('%s %s', req.method, req.url);
    console.log(req.body, 'req.body');
    console.log(req.query, 'req.query');
    console.log(req.originalUrl, 'req.originalUrl');
    console.log(req.hostname, 'req.hostname');
    console.log(req.accepts, 'req.accepts');
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.set('Header', 'Value');l
    res.send({
        name: 'Yura',
        nickName: 'Lavrucci'
    });
});

const server = app.listen(3000, () => {
    console.log('This is callback', 'Listening on port 3000');
});
