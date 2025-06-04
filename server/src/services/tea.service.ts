import prisma from '../prisma';

export const listTeas = async (keyword?: string, category?: string) => {
  return prisma.tea.findMany({
    where: {
      AND: [
        keyword ? { OR: [{ nameCN: { contains: keyword } }, { code: { contains: keyword } }] } : {},
        category ? { category } : {}
      ],
    },
  });
};

export const createTea = async (data: any) => {
  return prisma.tea.create({ data });
};

export const updateTea = async (id: number, data: any) => {
  return prisma.tea.update({ where: { id }, data });
};

export const deleteTea = async (id: number) => {
  return prisma.tea.delete({ where: { id } });
};
