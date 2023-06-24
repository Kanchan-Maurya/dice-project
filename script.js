game=()=>{
    makesound();
    let p1 = Math.floor(Math.random() * 6) + 1;
    let p2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("p1").src=`dice-image/${p1}.png`;
    document.getElementById("p2").src=`dice-image/${p2}.png`;
    if (p1>p2){
        document.querySelector("h1").textContent=  ("🥳Player 1 wins🥳");
    }else if(p1<p2){
        document.querySelector("h1").textContent= ("🤩Player 2 wins🤩");
    }else{
        document.querySelector("h1").textContent= ("🎈Oops! It's a DRAW🎈");
    }


}
function makesound (){
    let audio = new Audio("dice-image/sound.mp3")
    audio.play();
}


