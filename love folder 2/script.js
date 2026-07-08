let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

let welcome = document.getElementById("welcome");
let question = document.getElementById("question");
let final = document.getElementById("final");
let secret = document.getElementById("secret");

let noCount = 0;



// Start button

function startLove(){

    welcome.classList.add("hidden");
    question.classList.remove("hidden");

}



// No button escaping

noBtn.onclick = function(){

    noCount++;


    // move randomly

    noBtn.style.left = Math.random()*70 + "vw";
    noBtn.style.top = Math.random()*60 + "vh";


    // make no smaller

    let size = 1 - (noCount * 0.15);

    noBtn.style.transform = `scale(${size})`;


    // make yes bigger

    yesBtn.style.transform =
    `scale(${1 + noCount * 0.25})`;



    // after 4 times no disappears

    if(noCount >=4){

        noBtn.style.display="none";

        yesBtn.style.position="fixed";
        yesBtn.style.left="0";
        yesBtn.style.top="0";
        yesBtn.style.width="100vw";
        yesBtn.style.height="100vh";
        yesBtn.style.fontSize="60px";
        yesBtn.style.borderRadius="0";

    }

};



// Yes button

yesBtn.onclick=function(){

    question.classList.add("hidden");

    final.classList.remove("hidden");


    heartExplosion();

};




// Heart explosion effect

function heartExplosion(){

    for(let i=0;i<50;i++){

        let heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.className="heart";

        heart.style.left="50%";
        heart.style.top="50%";

        heart.style.fontSize=
        Math.random()*30+20+"px";


        heart.style.animationDuration=
        "2s";


        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },2000);

    }

}




// Secret message

function secretMessage(){

    final.classList.add("hidden");

    secret.classList.remove("hidden");

}




// Floating hearts generator

function createHeart(){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="♡";


    heart.style.left=
    Math.random()*100+"vw";


    heart.style.animationDuration=
    (4+Math.random()*6)+"s";


    document
    .getElementById("hearts-container")
    .appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },10000);

}



setInterval(createHeart,300);