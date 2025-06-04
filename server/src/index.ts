import express from 'express';
import cors from 'cors';
import teaRouter from './controllers/tea.controller';
import inboundRouter from './controllers/inbound.controller';
import outboundRouter from './controllers/outbound.controller';
import responseMiddleware from './middlewares/response';

const app = express();
app.use(cors());
app.use(express.json());
app.use(responseMiddleware);

app.use('/api/teas', teaRouter);
app.use('/api/inbounds', inboundRouter);
app.use('/api/outbounds', outboundRouter);

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
