var bodyParser = require('body-parser');
module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extend: false}));
};