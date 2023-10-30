const express = require('express');

const app = express();
const port = 3000;

// set public folder as root
app.use(express.static('static'));

// provide access to node_modules from the client side
app.use('/scripts', express.static('./node_modules/'));

// redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/static/index.html`));

app.listen(port, () => {
    console.info('listening on %d', port);
})