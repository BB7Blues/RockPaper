const playerScore = document.querySelector('.player');
const compScore = document.querySelector('.computer');
const compSymbol = document.querySelector('.computersymbol');
const playerSymbol = document.querySelector('.playersymbol');
let spielerPunkt = 0;
let compPunkt = 0;
let comPlay = null;
let playlerPlay = null;



function punkte(sieger){

    if(sieger == "comp"){
            console.log("Verloren!");
           // alert("Verloren!");
            //punkteCom++;
    }else if(sieger == "player"){
        console.log("Gewonnen");
       //le.log("Punkt gewinn!");
      // alert("Punkt gewinn!");
           // punkteSpieler++;
    }else if(sieger == "even"){
     //alert("Unentschieden!");
     console.log("Unentschieden!");    
    }
    

}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
    }

/*function game(){
let i = 0;

while(i < 5){

    let userinput = prompt("Stein, Schere oder Papier?");
    userinput = userinput.toLowerCase();
    //playround(userinput,computerplay(getRandomIntInclusive(1,3)));
    punkte(playround(userinput,computerplay(getRandomIntInclusive(1,3))));
    i++;
    
      
    }
    console.log("Spieler: " + punkteSpieler + " Computer: " + punkteCom);
    if(punkteSpieler > punkteCom){
    console.log("Du hast Gewonnen!");
    } else if (punkteCom > punkteSpieler){

            console.log("Du hast verloren...");

    }
    }
*/


function computerplay (number){
//console.log(number);
let stein = "stein";
let papier = "papier";
let schere = "schere";
if (number == 1){
    console.log("Stein");
    comPlay = stein;
    compSymbol.textContent = comPlay;
    return stein;
}else if (number == 2){
    console.log("Schere");
    comPlay=schere;
    compSymbol.textContent = comPlay;
    return schere;

}else
comPlay=papier;
compSymbol.textContent = comPlay;
console.log("Pappe");
return papier;

}


function playround(playerselection,computerselection){
console.log("Test");
let verloren = "comp"
let gewonnen = "player"
let unentschieden = "even";
    if (playerselection == "stein" && computerselection == "stein"){
return unentschieden;
        

     }else if(playerselection == "papier" && computerselection == "papier"){
    return unentschieden;
            

}else if(playerselection == "schere" && computerselection == "schere"){
return unentschieden;
        

}
     
     else if (playerselection == "stein" && computerselection == "schere"){
        
        
        spielerPunkt++;
        playerScore.textContent = spielerPunkt;
                return gewonnen;
                

        }else if  (playerselection == "schere" && computerselection == "papier"){
            spielerPunkt++; 
            playerScore.textContent = spielerPunkt;  
            return gewonnen;
                

}
else if  (playerselection == "papier" && computerselection == "stein"){


spielerPunkt++;
playerScore.textContent = spielerPunkt;
return gewonnen;
}

else if  (playerselection == "stein" && computerselection == "papier"){
compPunkt++;
    compScore.textContent = compPunkt;
    return verloren;

}

else if  (playerselection == "schere" && computerselection == "stein"){
compPunkt++;
compScore.textContent = compPunkt;
    return verloren;


}
else if  (playerselection == "papier" && computerselection == "schere"){
compPunkt++
compScore.textContent = compPunkt;
    return verloren;


}
}
function removeAnimation(e){

    console.log(e.propertyName);
    if (e.propertyName !== "transform") return;
    this.classList.remove('animate');

}

function animate(e){
    //console.log(e);
    
    this.classList.toggle('animate');

}
function dummieTest(e){

    console.log(e.target);

}


const stein = document.querySelector('.stein');
const schere = document.querySelector('.schere');
const papier = document.querySelector('.papier');
stein.addEventListener('click', animate);
schere.addEventListener('click', animate);
papier.addEventListener('click', animate);


stein.addEventListener('transitionend',removeAnimation);
papier.addEventListener('transitionend',removeAnimation);
schere.addEventListener('transitionend',removeAnimation);
stein.addEventListener('click', function(e){
    playerSymbol.textContent = "Stein";
    playround("stein",computerplay(getRandomIntInclusive(1,3)));


});
schere.addEventListener('click', function(e){
    playerSymbol.textContent = "Schere";
    playround("schere",computerplay(getRandomIntInclusive(1,3)));


});
papier.addEventListener('click', function(e){
    playerSymbol.textContent = "Papier";
    playround("papier",computerplay(getRandomIntInclusive(1,3)));


});