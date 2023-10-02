import prisma from "@/utils/prisma";

// disabling caching
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const runtime = "edge";

export async function GET() {
  const start = Date.now();

  const result = await prisma.post
    .aggregate({
      _min: {
        createdAt: true,
        views: true,
      },
      _sum: {
        views: true,
      },
      _max: {
        views: true,
        createdAt: true,
      },
      cacheStrategy: {
        ttl: 60,
        swr: 10,
      },
    })
    .withAccelerateInfo();

  return Response.json({
    result,
    timeTaken: `${Date.now() - start} ms`,
  });
}
