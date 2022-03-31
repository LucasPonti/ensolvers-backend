import express from 'express';
import mongoose from 'mongoose';
import router from './api/routes.js';
//import store from './api/models/store.js';

const app = express();
const port = 5500;

const mongoURL =
  'mongodb+srv://LucasPonti:Lip36345079@cluster0.b3q34.mongodb.net/tododatabase?retryWrites=true&w=majority';

mongoose.connect(mongoURL, {});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Accept, Authorization, X-HTTP-Method-Override'
  );
  next();
});

app.use(express.json({ limit: '50mb' }));
app.use('/v1/api', router);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
