
const express = require('express');
const apiRouter = require('./routes')

const app = express();

app.use(express.json());

app.use('/api/pt4a', apiRouter);

app.listen(process.env.PORT || '3000', () => {
  console.log(`PT4A Server listening on port: ${process.env.PORT || '3000'}`);
});

app.get('/api/pt4a', async (req, res) => {
  res.json({ status: "PT4A/ STRENGTH READY TO ROLL!!" });
});
