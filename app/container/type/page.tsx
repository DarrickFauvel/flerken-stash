import Hx from "@/app/components/hx"
import { getAllContainerTypes } from "./actions"

type ContainerTypeProps = {
  id: string
  name: string
  description: string
  short_code: string
}

export default async function ContainerTypesPage() {
  const allTypes = await getAllContainerTypes()
  const listItems = allTypes.map(
    (containerType: ContainerTypeProps) => {
      return <li key={containerType.id}>{containerType.name}</li>
    }
  )

  return (
    <>
      <Hx level={1}>Container Types</Hx>
      <h1>Container Types</h1>
      <ul>{listItems}</ul>
    </>
  )
}
