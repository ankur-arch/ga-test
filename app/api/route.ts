import prisma from "@/utils/prisma";

// disabling caching
export const fetchCache = "force-no-store";
export const revalidate = 0;

export async function GET() {
  const start = Date.now();

  const result = await prisma.post.aggregate({
    take: 100_000,
    _min: {
      views: true,
    },
    _max: {
      createdAt: true,
    },
  });

  return Response.json({
    result,
    timeTaken: `${Date.now() - start} ms`,
  });
}
