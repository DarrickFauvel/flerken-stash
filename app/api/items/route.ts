import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const allUsers = await prisma.user.findMany();
    const users = await allUsers
   
    return Response.json(users)
  }