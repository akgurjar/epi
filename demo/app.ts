import express from 'express';
import routes from './routes';

const app = express();

const PORT = 3000;

app.use('/', routes);

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});
