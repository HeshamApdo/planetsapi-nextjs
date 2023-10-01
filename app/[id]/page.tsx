import { GetInfoOnePlanet } from "@/utils/GetInfoOnePlanet"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
    params:{
        id: string
    }
}

export async function generateMetadata({ params : {id} }:Props) : Promise<Metadata> {
  const onePlanet: Promise<Planet> = GetInfoOnePlanet(id)
  const data = await onePlanet

  if (!data.name){
    return{
      title: `${data.name} Not Found`
    }
  }

  return{
    title: data.name,
    description: `This Page Of ${data.name}`
  }
} 

export default async function page({ params : {id} }:Props) {
  const onePlanet: Promise<Planet> = GetInfoOnePlanet(id)
  const data = await onePlanet

  if (!data.name) notFound()
  // console.log(data)
  return (
    <main>
      <div className="flex flex-col gap-2 justify-center items-center w-fit p-5">
        <div className="text-2xl text-red-400 underline decoration-gray-950">
          {data.name}
        </div>
        <div className="text-red-500  p-2">
          {data.description}
        </div>
      </div>
    </main>
  )
}
