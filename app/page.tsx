"use client"
import Image from "next/image"
import { GetInfoPlanets } from "@/utils"
import Link from "next/link"

export default async function Home() {
  const planets: Promise<Planet[]> = GetInfoPlanets()
  const data = await planets
  console.log(data)
  return (
    <main className="">
      {data.map((planet) =>(
        <div className="flex flex-col gap-2">
          <Link href={`/${planet.id}`} className="text-xl text-red-300 w-fit p-2 underline">
            {planet.name}
          </Link>
          <div>
            {/* <Image src={planet.imgSrc.img} alt="planet" width={200} /> */}
            {planet.imgSrc.imgDescription}
          </div>
          <div className="w-fit p-5">
            {planet.description}
          </div>
          <div className="w-fit p-5">
            <Link href={planet.wikiLink}>
            More Info About <span className="font-semibold underline">{planet.name}</span>
            </Link>
          </div>
        </div>
      ))}
    </main>
  )
}
