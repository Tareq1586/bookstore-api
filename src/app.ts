import bodyParser from 'body-parser';
import express from 'express';
import authorRoutes from './routes/authorRoutes';
import bookRoutes from './routes/bookRoutes';

const app = express();
app.use(bodyParser.json());

app.use('/api', bookRoutes);
app.use('/api', authorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});