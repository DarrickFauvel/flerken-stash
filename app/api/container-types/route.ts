import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const containerTypes = await prisma.containerType.findMany()
    return NextResponse.json(containerTypes, { status: 200 })
  } catch (error) {
    console.error("Error fetching container types:", error)
    return NextResponse.json(
      { error: "Failed to fetch container types" },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const short_code = formData.get("short_code") as string

    const uniqueFieldNames = ["name", "short_code"]

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    const existingContainerTypeName = await prisma.containerType.findFirst({
      where: { name },
    })

    if (existingContainerTypeName) {
      return NextResponse.json(
        { error: `Container Type '${name}' already exists.` },
        { status: 400 }
      )
    }

    const existingContainerTypeShortCode = await prisma.containerType.findFirst(
      {
        where: { short_code },
      }
    )

    if (existingContainerTypeShortCode) {
      return NextResponse.json(
        { error: `Container Type '${short_code}' already exists.` },
        { status: 400 }
      )
    }

    const newContainerType = await prisma.containerType.create({
      data: {
        name,
        description,
        short_code,
      },
    })

    // return NextResponse.json(newContainerType, { status: 201 })
    redirect("/container/type")
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create container type" },
      { status: 500 }
    )
  }
}
