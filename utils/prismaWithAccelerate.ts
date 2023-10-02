import { withAccelerate } from "@prisma/extension-accelerate";
import "./overload";

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasourceUrl: process.env.ACCELERATE,
  }).$extends(withAccelerate());
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prismaWithAccelerate = globalForPrisma.prisma ?? prismaClientSingleton();

export default prismaWithAccelerate;

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prismaWithAccelerate;
