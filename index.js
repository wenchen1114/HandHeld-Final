let cardId = ["#tarot-glb", "#tarot-glb-1", "#tarot-glb-2", "#tarot-glb-3", "#tarot-glb-4", "#tarot-glb-5", "#tarot-glb-6", "#tarot-glb-7", "#tarot-glb-8", "#tarot-glb-9", "#tarot-glb-10", "#tarot-glb-11", "#tarot-glb-12", "#tarot-glb-13", "#tarot-glb-14", "#tarot-glb-15", "#tarot-glb-16", "#tarot-glb-17", "#tarot-glb-18", "#tarot-glb-19", "#tarot-glb-20", "#tarot-glb-21"]
let randomCardId = [];
let i = cardId.length;
let pickId;
for(let j=0; j<i; j++){
    randomNum=Math.floor(Math.random()*(cardId.length));
    randomCardId.push(cardId[randomNum]);
    cardId.splice(randomNum,1);
}
let pos;

let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let card7 = document.getElementById("card7");
let card8 = document.getElementById("card8");
let card9 = document.getElementById("card9");
let card10 = document.getElementById("card10");
let card11 = document.getElementById("card11");
let card12 = document.getElementById("card12");
let card13 = document.getElementById("card13");
let card14 = document.getElementById("card14");
let card15 = document.getElementById("card15");
let card16 = document.getElementById("card16");
let card17 = document.getElementById("card17");
let card18 = document.getElementById("card18");
let card19 = document.getElementById("card19");
let card20 = document.getElementById("card20");
let card21 = document.getElementById("card21");

let cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21];

for(let i = 0; i<21; i++){
    cards[i].setAttribute("gltf-model", randomCardId[i]);
    if(i<11){
        cards[i].object3D.rotation.set(
            THREE.Math.degToRad(0),
            THREE.Math.degToRad(90-18*i),
            THREE.Math.degToRad(0)       
        );
    }else{
            cards[i].object3D.rotation.set(
                THREE.Math.degToRad(0),
                THREE.Math.degToRad((-90)-18*i),
                THREE.Math.degToRad(0));
    }
      cards[i].object3D.rotation.x += Math.PI;
      cards[i].addEventListener("click", function(evt){
          pickId = cards[i].getAttribute("gltf-model");
          console.log(pickId);
          localStorage.setItem("cardInfo", pickId);
      })
}