import{Games} from "./games.js"
export class Details extends Games{
    constructor(){
         super();
    }




     static async GetDetails(gid){

        let options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ee6e5e67e5msh41263fe7d7b60d6p1f255cjsnc2319ab23ff7',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
  let resp= await fetch('https://free-to-play-games-database.p.rapidapi.com/api/game?id=' + gid, options)
      resp= await resp.json();
      return resp;
   } 
     
}