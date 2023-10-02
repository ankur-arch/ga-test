import prismaWithAccelerate from "@/utils/prismaWithAccelerate";

// disabling caching
export const fetchCache = "force-no-store";
export const revalidate = 0;

export async function GET() {
  const start = Date.now();

  const result = await prismaWithAccelerate.post.aggregate({
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