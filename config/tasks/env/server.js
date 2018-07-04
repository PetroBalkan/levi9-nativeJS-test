const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8000;
module.exports = () => {


    app.use(express.static(path.join(appRoot, '/dist')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(appRoot + '/dist/index.html'));
    });


    app.listen(port, function (err) {
        if (err) {
            console.log(`Failed to start on port "${port}"`)
        } else {
            console.log(`Dev server is listening on port "${port}"`)
        }
    });
};
