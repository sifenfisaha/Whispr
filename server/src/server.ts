import app from "./app";
import { PORT } from './config.ts';

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
})
