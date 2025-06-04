import { Router } from 'express';
import { listOutbounds, createOutbound } from '../services/outbound.service';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const list = await listOutbounds();
    res.success(list);
  } catch (e) { next(e); }
});

router.post('/', async (req, res, next) => {
  try {
    const ob = await createOutbound(req.body);
    res.success(ob);
  } catch (e) { next(e); }
});

export default router;
