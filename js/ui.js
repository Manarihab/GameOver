import {Games} from "./games.js"
import { Details } from "./details.js";

export class Ui extends Details{

    static async DisplayGames(category){
     let res=await Games.GetGames(category);
      let cartoona="";
    for(let i =0; i<res.length; i++){
        cartoona+=`<div  class="col-md-6 col-lg-4 col-xl-3 mh-100">
          <div  class="card h-100 bg-transparent" style="cursor: pointer;">
            <div class="card-body ">
              <img gid="${res[i].id}" class="card-img-top object-fit-cover" src="${res[i].thumbnail}" alt="">
              <div class="d-flex justify-content-between mt-3">
                <p>${res[i].title}</p>
                <div class="badge text-bg-primary " style="max-height: 20px;">free</div>
              </div>
              <div class="card-text text-center opacity-50">${res[i].short_description}</div>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <div class="badge text-bg-secondary">${res[i].genre}</div>
              <div class="badge text-bg-secondary">${res[i].platform}</div>
            </div>
          </div>
        </div>`;
        document.querySelector("#data").innerHTML= cartoona;
        
    }
   let games= document.querySelectorAll(".card-img-top");
   for(let i=0; i<games.length; i++){
              games[i].addEventListener("click",async function(e){
                let gameId= e.target.getAttribute("gid")
                let det=await Details.GetDetails(gameId);
                let str=`<div class="col-md-4"> <img src="${det.thumbnail}" alt=""></div>
    <div class="col-md-8"> 
      <h3>title ${det.title}</h3>
      <p>category: ${det.genre} <div class="badge text-bg-info"></div></p>
      <p>platform: ${det.platform} <div class="badge text-bg-info"></div></p>
      <p>status: ${det.status} <div class="badge text-bg-info"></div></p>
      <p>${det.description}</p>
      <a class="btn btn-outline-warning text-capitalize" target="_blank" href="${det.game_url}">show game</a>
    </div>`;
                document.querySelector("#yarab2").innerHTML=str;
                document.querySelector("#yarab1").classList.add("d-none");
                document.querySelector(".details").classList.remove("d-none");
                document.querySelector(".btn-close").addEventListener("click", function(){
                document.querySelector(".details").classList.add("d-none");
                document.querySelector("#yarab1").classList.remove("d-none");
          })

          })
          
          }

}
} 
