let result = localStorage.getItem("cardInfo");
let pos;
let cardNum;

let card = document.getElementById("card1");
let resultText = document.getElementById("resultText");

let rotationZ;

console.log(result);
let cards = ["tarot-fool.glb","tarot-magician.glb", "tarot-highpriestess.glb", "tarot-empress.glb", "tarot-emperor.glb", "tarot-hierophant.glb", "tarot-lovers.glb", "tarot-chariot.glb", "tarot-strength.glb", "tarot-hermit.glb", "tarot-wheeloffortune.glb", "tarot-justice.glb", "tarot-hangedman.glb", "tarot-death.glb", "tarot-temperance.glb", "tarot-devil.glb", "tarot-tower.glb", "tarot-star.glb", "tarot-moon.glb", "tarot-sun.glb", "tarot-judgement.glb", "tarot-world.glb"]
let upright = ["It’s the fresh start of your journey and time to find your freedom and passion.", "You should seize the opportunity and execute your thoughts.", "Follow your instinct and push yourself, even if it means putting your emotion aside.", "Feel the sensibility in your life and embrace the expression and creativity.", "While you set up the rule and manage, listen to others’ opinions.", "It’s time to execute your thoughts and follow the rules.", "Beware of the power dynamic of the relationship.", "The new challenge is coming, stay focused and determined.", "Keep your willpower and hold your impulse.", "You are finishing up the first step of your journey, it’s time to reflect yourself.", "Bring your knowledge for the next challenge.", "It’s time to think about the purpose of the sacrifices you did and make sure you have a clear direction.", "It’s time to restart. Welcome the change that is ahead of you.", "It’s time to review your state and keep balanced.", "You might be trapped into materialism and you should not indulge in this state.", "Accept the destroy and keep the faith in your mind.", "Give your trust to the hope and you’ll see the direction.", "Accept the changes and don’t get controlled by the fear.", "You have a bright future and it’s time to move on.", "The final moment is coming and it’s time to self-evaluate.", "This is the end of the journey and you can feel the fulfillment in life."];
let reversed = ["You might be too naive and reckless to deal with the situation.", "You might fall into the illusion and the fake part is getting revealed.", "Your thoughts get affected by your emotion and couldn’t sort it out.", "You might work too hard to create the illusion, so as to maintain the control.", "You might abuse your power and make yourself an irresponsible person.", "The rules or morals are broken and you might fail to make the promise.", "The communication between you and others is off.", "You might get a bit overwhelmed by the new state.", "You are controlled by your impulse and lose the freedom of your mind.", "You might be arrogant and refuse to communicate.", "You limit yourself to the current state and miss the opportunity to change.", "You might sacrifice so much that you lose your own voice.", "You might be indulged in the past and couldn’t head to the future.", "You might go to extremes and lack balance in your emotion.", "You might be too indulged in your addiction and couldn’t escape.", "The devastation is enormous and there is no way to escape.", "You are overwhelmed by your emotion or couldn’t give all your trust.", "You might ignore the importance of emotion.", "You might be unrealistic and lose the pure faith in your mind.", "You are not able to face the change and miss the opportunity.", "The journey is incomplete due to the shadows in your mind."];

for(let i=0; i<cards.length; i++){
    if(cards[i] == result){
        cardNum = i;
    }
}

card.setAttribute("gltf-model", result);

if(Math.random()> 0.5){
    rotationZ = 0;
    pos = "upright";
}else{
    rotationZ = 180;
    pos = "reversed";
}

if(pos == "upright"){
    resultText.setAttribute("text", text=`value: ${upright[cardNum]}; width: 1; lineHeight: 50; wrapCount: 15; align: left;`);
    resultText.setAttribute("animation", "property: text.opacity; to: 1.0; dur: 2000; delay:4200");
}else if(pos == "reversed"){
    resultText.setAttribute("text", text=`value: ${reversed[cardNum]}; width: 1; lineHeight: 50; wrapCount: 15; align: left;`);
    resultText.setAttribute("animation", "property: text.opacity; to: 1.0; dur: 2000; delay:4200");
}


card.setAttribute("rotation", `0 0 ${rotationZ}`);
card.setAttribute("animation", `property: rotation; to: 0 180 ${rotationZ}; dur: 2000; easing: linear; loop: false`);
card.setAttribute("animation__2", `property: position; to: -1 1.6 -2.5; dur: 2500; delay:2000; easing: easeInQuad`);