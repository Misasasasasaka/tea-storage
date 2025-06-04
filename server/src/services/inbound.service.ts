import prisma from '../prisma';

export const listInbounds = async () => {
  return prisma.inbound.findMany({ include: { items: true } });
};

export const createInbound = async (dto: { items: { teaId: number; qty: number }[] }) => {
  return prisma.inbound.create({
    data: {
      code: `IN${Date.now()}`,
      items: { create: dto.items },
    },
    include: { items: true },
  });
};
