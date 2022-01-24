const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`<form action="/answer" method="post">
    <input type="text" placeholder="123123">
</form>`);
});

app.post('/answer', function (req, res){
    res.send('123123');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});