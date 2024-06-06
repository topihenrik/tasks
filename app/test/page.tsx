import {seed} from "@/app/lib/seed";

export default async function TestPage() {
  const result = await seed();
  return (
    <div>This is a test page!</div>
  )
}