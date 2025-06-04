import prisma from '../prisma';
import { calcStocks } from './stock.service';

export const listOutbounds = async () => {
  return prisma.outbound.findMany({ include: { items: true } });
};

export const createOutbound = async (dto: { items: { teaId: number; qty: number }[] }) => {
  const stocks = await calcStocks();
  dto.items.forEach((it: { teaId: number; qty: number }) => {
    const s = stocks.find((x: any) => x.id === it.teaId)?.stock || 0;
    if (it.qty > s) throw new Error(`茶叶ID ${it.teaId} 库存不足`);
  });
  return prisma.outbound.create({
    data: {
      code: `OUT${Date.now()}`,
      items: { create: dto.items },
    },
    include: { items: true },
  });
};
