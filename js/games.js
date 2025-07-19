export class Games{
    static async GetGames(category){
       
    let options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ee6e5e67e5msh41263fe7d7b60d6p1f255cjsnc2319ab23ff7',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
}
    
let res = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=' + category ,options)
 res = await res.json();
 
 return res
}
} 