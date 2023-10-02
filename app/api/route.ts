import prisma from "@/utils/prisma";

// disabling caching
export const fetchCache = "force-no-store";
export const revalidate = 0;

export async function GET() {
  const start = Date.now();

  const count = await prisma.post.count();

  return Response.json({
    "Post count": count,
    timeTaken: `${Date.now() - start} ms`,
  });
}
