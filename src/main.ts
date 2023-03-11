import express from 'express';
import {Testing} from '@api/shared'
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  const d : Testing = {title : "this is from api"}
  res.send({ message: d.title });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
