import {Games} from "./games.js"
import {Details} from "./details.js"
import {Ui} from "./ui.js"
let defaultCat = "mmorpg"
Games.GetGames(defaultCat);
Ui.DisplayGames(defaultCat);
let links = document.querySelectorAll(".nav-link");
    for(let i =0; i<links.length; i++){
        links[i].addEventListener("click",function(e){
           let category= e.target.innerHTML;
            Games.GetGames(category);
            Ui.DisplayGames(category);
            links.forEach(link=>{
      link.classList.remove("active");
    })
            e.target.classList.add("active");
        })
    }