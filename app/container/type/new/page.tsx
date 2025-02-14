import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function () {
  return (
    <>
      <h1 className="text-xl font-bold">Create New Container Type</h1>
      <form className="flex flex-col gap-2" action="/api/container-types" method="POST">
        <Label>Name</Label>
        <Input type="text" name="name" placeholder="Name" required />
        <Label>Description</Label>
        <Input type="text" name="description" placeholder="Description" required />
        <Label>Short Code</Label>
        <Input type="text" name="short_code" placeholder="example: DK (for Desk)" required />
        <Button type="submit">Create</Button>
      </form>
    </>
  )
}
