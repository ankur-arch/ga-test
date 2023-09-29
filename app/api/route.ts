import prisma from "@/utils/prisma";

export async function GET() {
  const d = await fetch("https://api.quotable.io/random", {
    cache: "no-cache",
  });

  const res = await d.json();
  const start = Date.now();

  const count = await prisma.post.aggregate({
    _avg: {
      views: true,
    },
  });

  return Response.json({
    "Post count": count,
    res,
    timeTaken: (Date.now() - start) / 1000,
  });
}
