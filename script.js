const PASSWORD = "Jan";

const letter = `My dearest Jan,

I know un ja xum mathan bah but mathan 80km, lkn tay gunx an api amit lo ja un yaad akotah bah k.

Her smile e une yaad dashi bi.

Ja her dua lo un bah.

Ja her heartbeat e une guik gaybi.

Ja gutay gor loved feel gotas ganay desmanah bah, mathan ban kuli love kam omanas awaji na joten efforts en xum e love aur relation oltalik strong maybexan.

I miss you more than words can ever explain.

But no matter the distance...

You will always have my heart. ❤️

Forever Yours,

Iqra 🌸`;

function checkPassword(){

    const input = document.getElementById("password").value;

    if(input === PASSWORD){

        document.getElementById("loginPage").style.display="none";
        document.getElementById("surprisePage").style.display="block";

        const music=document.getElementById("bgMusic");
        music.volume=0.5;
        music.play();

    }else{

        document.getElementById("error").innerHTML="Wrong Password ❤️";

    }

}

function openLetter(){

    document.getElementById("heartBtn").style.display="none";

    document.getElementById("letter").style.display="block";

    typeWriter();

}

function typeWriter(){

    const text=document.getElementById("typingText");

    text.innerHTML="";

    let i=0;

    const speed=45;

    function typing(){

        if(i<letter.length){

            if(letter.charAt(i)==="\n"){

                text.innerHTML+="<br>";

            }else{

                text.innerHTML+=letter.charAt(i);

            }

            i++;

            setTimeout(typing,speed);

        }

    }

    typing();

}
const photos = [
    "Photos/photo1.jpg",
    "Photos/photo2.jpg",
    "Photos/photo3.jpg",
    "Photos/photo4.jpg"
];

let currentPhoto = 0;

setInterval(function(){

    const slide = document.getElementById("slide");

    if(!slide) return;

    slide.style.opacity = 0;

    setTimeout(function(){

        currentPhoto = (currentPhoto + 1) % photos.length;

        slide.src = photos[currentPhoto];

        slide.style.opacity = 1;

    },400);

},3000);