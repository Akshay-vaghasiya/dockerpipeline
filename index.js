const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send({'message': 'Message from AVV'});
});

app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
});