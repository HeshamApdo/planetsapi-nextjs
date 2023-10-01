// const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c2beb1a414msh06f40eba2589788p19222fjsn9949059576e4',
// 		'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const API_KEY: string = process.env.DATA_API_KEY as string

export async function GetInfoPlanets(){
    const res = await fetch("https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/",{
        headers:{
            'X-RapidAPI-Key': API_KEY,
		    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        }
    })

    if (!res.ok) throw new Error ("Failed")
    return res.json()
}