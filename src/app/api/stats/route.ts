import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const stats = await prisma.stats.findFirst();
    if (!stats) {
      const newStats = await prisma.stats.create({
        data: {
          pageViews: 1,
          totalProjects: 0,
        },
      });
      return NextResponse.json(newStats);
    }

    const updatedStats = await prisma.stats.update({
      where: { id: stats.id },
      data: {
        pageViews: stats.pageViews + 1,
      },
    });

    return NextResponse.json(updatedStats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
