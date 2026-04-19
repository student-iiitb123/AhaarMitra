import express from 'express';
import userRoute from './modules/auth/seeker/user.route.js';
const app = express();

app.use(express.json());
app.use('/api/user', userRoute);

app.get('/', (req, res) => {
  res.send('Hello app');
});

export default app;
