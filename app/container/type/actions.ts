"use server"

import { prisma } from "@/lib/prisma"

export async function getAllContainerTypes() {
  try {
    const allContainerTypes = await prisma.containerType.findMany()

    return allContainerTypes
  } catch (error) {
    return Response.json(
      { error: "Could not retrieve container types" },
      { status: 400 }
    )
  }
}
