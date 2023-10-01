

const API_KEY: string = process.env.DATA_API_KEY as string

export async function GetInfoOnePlanet(id: string){
    const res = await fetch(`https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/${id}`,{
        headers:{
            'X-RapidAPI-Key': API_KEY,
		    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        }
    })
    if (!res.ok) undefined
    return res.json()
}