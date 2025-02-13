"use server"

import { prisma } from "../prisma"

export async function createUser(values) {
  // const rawFormData = {
  //   name: formData.get("name"),
  //   email: formData.get("email"),
  // };

  // console.log(rawFormData);
  const user = await prisma.user.create({
    data: { ...values },
  })
  const allUsers = await prisma.user.findMany()

  console.log(allUsers)

  // mutate data
  // revalidate cache
}
