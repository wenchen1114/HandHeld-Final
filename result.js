let result = localStorage.getItem("cardInfo");

let card = document.getElementById("card1");

let rotationZ;

card.setAttribute("gltf-model", result);

if(Math.random()> 0.5){
    rotationZ = 0;
}else{
    rotationZ = 180;
}

card.setAttribute("rotation", `0 0 ${rotationZ}`);
card.setAttribute("animation", `property: rotation; to: 0 180 ${rotationZ}; dur: 2000; easing: linear; loop: false`);
card.setAttribute("animation__2", `property: position; to: -1 1.6 -2.5; dur: 2500; delay:2000; easing: easeInQuad`);