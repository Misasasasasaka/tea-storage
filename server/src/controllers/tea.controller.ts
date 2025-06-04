import { Router } from 'express';
import { listTeas, createTea, updateTea, deleteTea } from '../services/tea.service';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const { keyword, category } = req.query as any;
    const list = await listTeas(keyword, category);
    res.success(list);
  } catch (e) { next(e); }
});

router.post('/', async (req, res, next) => {
  try {
    const tea = await createTea(req.body);
    res.success(tea);
  } catch (e) { next(e); }
});

router.put('/:id', async (req, res, next) => {
  try {
    const tea = await updateTea(Number(req.params.id), req.body);
    res.success(tea);
  } catch (e) { next(e); }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await deleteTea(Number(req.params.id));
    res.success(true);
  } catch (e) { next(e); }
});

export default router;
