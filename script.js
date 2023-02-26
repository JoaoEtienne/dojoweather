

function hide() {
    var btn = document.querySelector("#cookiebtn");
        btn.style.display = "none"
}

var today = document.querySelector("#test");   
    tdy.innerText = "24*"

var today = document.querySelector("#test2");
    tdy2.innerText = "18*"

var tomorrow = domcument.querySelector("#tmrw");
    tmrw.innerText = "27*"

var tomorrow = document.querySelector("#tmrw");
    tmrw2.innerText = "19*"

var friday = document.querySelector("#fri");
    fri.innerText = "21*"

var friday = document.querySelector("#fri2");
    fri2.innerText = "16*"

var saturday = document.querySelector("#sat");
    sat.innerText = "26*"

var saturday = document.querySelector("#sat2")
    sat2.innerText = "21*"

function convert() {
    console.log();
    if(tdy.innerText == "75*"){
        tdy.innerText = "24*"
    }else{
        tdy.innerText = "75*"
    }

    if(tdy2.innerText == "65*"){
        tdy2.innerText = "18*"
    }else{
        tdy2.innerText = "65*"
    }

    if(tmrw.innerText == "80*"){
        tmrw.innerText = "27*"
    }else{
        tmrw.innerText = "80*"
    }

    if(tmrw2.innerText == "66*"){
        tmrw2.innerText = "19*"
    }else{
        tmrw2.innerText = "66*"
    }

    if(fri.innerText == "69*"){
        fri.innerText = "21*"
    }else{
        fri.innerText = "69*"
    }

    if(fri2.innerText == "61*"){
        fri2.innerText = "16*"
    }else{
        fri2.innerText = "61*"
    }

    if(sat.innerText == "78*"){
        sat.innerText = "26*"
    }else{
        sat.innerText = "78*"
    }

    if(sat2.innerText == "70*"){
        sat2.innerText = "21*"
    }else{
        sat2.innerText = "70*"
    }
}
