import express from 'express';
import path from 'path';
import { getLatestNews, getNewsBySource, getAllSources } from './controllers/newsController';

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '../public')));
app.get('/', getLatestNews);
app.get('/source/:source', getNewsBySource);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running successfully on http://localhost:${PORT}`)
});