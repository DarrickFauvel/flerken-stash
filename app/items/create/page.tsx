import { prisma } from "@/lib/prisma";
import Form from "next/form";

export default function NewItemPage() {
  async function createItem(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    console.log(rawFormData);
    const user = await prisma.user.create({
      data: rawFormData,
    });
    const allUsers = await prisma.user.findMany();

    console.log(allUsers);

    // mutate data
    // revalidate cache
  }

  return (
    <>
      <h1>Create New Item</h1>
      <Form action={createItem}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <button type="submit">Create</button>
      </Form>
    </>
  );
}
