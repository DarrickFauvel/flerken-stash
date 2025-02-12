import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Form from "next/form";

type RawFormDataProps = {
  name: string
  email: string
}

export default function NewUserPage() {
  async function createUser(formData: FormData) {
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
      <h1>Create New User</h1>
      <Form action={createUser}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <Button type="submit">Create</Button>
      </Form>
    </>
  );
}
