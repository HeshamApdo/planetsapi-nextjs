// For Game Api
// "use client"
// import { SelectedGameProps } from "@/types"
// import Link from "next/link"
// import { useState } from "react"
// import { CgArrowTopRight, CgDetailsMore } from "react-icons/cg"
// import { RiPlayFill } from "react-icons/ri"
// import { AiFillDelete } from "react-icons/ai"


// export const SelectedGame = ({ data }:SelectedGameProps) => {
//     const [selected, setSelected] = useState()
//     // console.log(data)
//   return (
//     <main className={`z-50 relative`}>
//       {/* <div className={selected && `w-[2000px] h-[5000px] bg-white/70 absolute -left-[350px] xl:-left-[480px] -top-5`}></div> */}
//         <form className="">
//             <input type="text" value={selected} onChange={e => setSelected(e.target.value.toLowerCase())} className="w-[200px] h-9 p-2 md:h-10 z-50 rounded-xl text-sm md:text-lg outline-none" placeholder="your favorite game"/>
//         </form>
//         <div className="flex flex-row gap-5 flex-wrap justify-center items-center my-10 px-1 absolute -top-28 md:left-24">
//       {data.map((game:Game) =>(
//       <div className="">
//         {game.title.toLowerCase() === selected ?
//                 <div className="relative flex flex-col gap-3 w-[200px] h-[290px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[530px] rounded-b-xl bg-slate-700 shadow-md text-white/80 z-50 border-4 border-blue-600 shadow-blue-500">
//                   <div className="absolute top-2 md:top-3 right-2 w-fit p-2 bg-white/40 rounded-full hover:bg-white/60 cursor-pointer" onClick={() => setSelected(null)}>
//                 <AiFillDelete className="text-xl text-red-600"/>
//                 </div>
//                 <Link href={`/games/${game.id}`}>
//                 <div className="absolute top-2 md:top-3 left-2 w-fit p-2 bg-white/40 rounded-full hover:bg-red-400 hidden md:block">
//                 <CgArrowTopRight className="text-xl text-white"/>
//                 </div>
//                 <img src={game.thumbnail} className="w-full shadow-md"/>
//               </Link>
//               <div className="text-center text-sm md:text-xl font-semibold px-1">
//                 {game.title}
//               </div>
//               <div className="flex flex-col lg:flex-row gap-1 md:gap-5 px-2 md:px-5 justify-center items-center">
//                 <div className="text-center text-xs md:text-lg">
//                   {game.publisher}
//                 </div>
//                 <div className="text-slate-500 text-xs">
//                   {game.release_date}
//                 </div>
//               </div>
//               <div className="px-2 py-1 hidden lg:block text-center">
//                 {game.short_description}
//               </div>
//               <div className="flex flex-row justify-between w-full px-2 md:px-10 items-center absolute bottom-2">
//                 <Link href={`/games/${game.id}`} className="flex flex-row gap-1 justify-center items-center w-fit p-2 text-xs md:text-lg font-medium text-white bg-red-600 rounded-xl hover:opacity-80">
//                   Details
//                   <CgDetailsMore />
//                 </Link>
//                 <Link href={game.game_url} className="flex flex-row gap-1 justify-center items-center w-fit p-2 text-xs md:text-lg font-medium text-white bg-green-500 rounded-xl hover:opacity-80">
//                   Play
//                   <RiPlayFill />
//                 </Link>
//               </div>
//                 </div>
//               :
//               ""
//         }
//       </div>
//       ))}
//       </div> 
//     </main>
//   )
// }

{/* <div className="text-white">
{data.map((game) =>(
    <div>
        {game.title.toLowerCase() === selected ?
        <div>
            <div>
                {game.title}
            </div>
            <div>
                {game.id}
            </div>
        </div>
        :
        ""
        }
    </div>
))}
</div> */}