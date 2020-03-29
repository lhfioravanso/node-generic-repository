import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes';

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.listen(port);
console.log('Server started on: ' + port);

module.exports = app;