
import express from 'express';

import apiRouter from './backup/routes/index.js';

const app = express();

app.use(express.json());

const port = 3000;

app.use('/api/pt4a', apiRouter);

app.listen(port, () => {
  console.log(`PT4A Server listening on port ${port}!`);
});

app.get('/api/pt4a', async (req, res) => {
  res.json({ status: "PT4A/ STRENGTH READY TO ROLL!!" });
});

