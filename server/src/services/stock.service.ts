import prisma from '../prisma';

export const calcStocks = async () => {
  const inSum = await prisma.inboundItem.groupBy({
    by: ['teaId'],
    _sum: { qty: true },
  });
  const outSum = await prisma.outboundItem.groupBy({
    by: ['teaId'],
    _sum: { qty: true },
  });

  const inMap: Record<number, number> = Object.fromEntries(inSum.map((i: any) => [i.teaId, i._sum.qty ?? 0]));
  const outMap: Record<number, number> = Object.fromEntries(outSum.map((o: any) => [o.teaId, o._sum.qty ?? 0]));

  const teas = await prisma.tea.findMany();
  return teas.map((t: any) => ({
    ...t,
    stock: (inMap[t.id] || 0) - (outMap[t.id] || 0)
  }));
};
