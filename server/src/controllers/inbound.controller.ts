import { Router } from 'express';
import { listInbounds, createInbound } from '../services/inbound.service';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const list = await listInbounds();
    res.success(list);
  } catch (e) { next(e); }
});

router.post('/', async (req, res, next) => {
  try {
    const inbound = await createInbound(req.body);
    res.success(inbound);
  } catch (e) { next(e); }
});

export default router;
