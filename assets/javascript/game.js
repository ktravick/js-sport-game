const Team1button = document.querySelector ( "#teamone-shoot-button");

const T1shotstaken= document.querySelector ( "#teamone-numshots");

const T1goals= document.querySelector ("#teamone-numgoals");

let T1shot =0
let T1G=0

Team1button.addEventListener ("click",function () {
    T1shotstaken.innerHTML = T1shot += 1
    if (Math.random() > 0.25){ 
        T1goals.innerHTML = T1G += 1
}
})

const Team2button = document.querySelector ("#teamtwo-shoot-button");

const T2shotstaken= document.querySelector ( "#teamtwo-numshots");
 
const T2goals= document.querySelector ("#teamtwo-numgoals");

let T2shots =0
let T2G =0

Team2button.addEventListener ( "click" ,function() {
    T2shotstaken.innerHTML = T2shots += 1
    if (Math.random() > 0.25) {
        T2goals.innerHTML = T2G += 1
    }

})


const resetbutton = document.querySelector ( "#reset-button");

resetbutton.addEventListener ( "click", function () {
    T2shotstaken.innerHTML = T2shots =0
    T1shotstaken.innerHTML = T1shots =0
    T2shots.innerHTML = T1G =0
    T1shots.innerHTML = T2G =0

    

})



    
