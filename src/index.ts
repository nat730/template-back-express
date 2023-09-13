import express from "express"
import "dotenv/config"

const port = process.env.PORT ? parseInt(process.env.PORT as string) : 3000

const app = express();

app.get('/hello', (req, res) => {
    res.send('hello world');
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  