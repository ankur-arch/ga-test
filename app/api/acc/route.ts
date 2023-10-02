import prismaWithAccelerate from "@/utils/prismaWithAccelerate";

// disabling caching
export const fetchCache = "force-no-store";
export const revalidate = 0;

export async function GET() {
  const start = Date.now();

  const count = await prismaWithAccelerate.post.count();

  return Response.json({
    "Post count": count,
    timeTaken: `${Date.now() - start} ms`,
  });
}
