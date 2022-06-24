import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`running on port ${PORT}`);
});
