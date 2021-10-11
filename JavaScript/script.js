let clap_sg = document.getElementById("clap-sg");
let hithat_sg = document.getElementById("hithat-sg");
let boom_sg = document.getElementById("boom-sg");
let ride_sg = document.getElementById("ride-sg");
let tom_sg = document.getElementById("tom-sg");
let tink_sg = document.getElementById("tink-sg");
let kick_sg = document.getElementById("kick-sg");
let snare_sg = document.getElementById("snare-sg");
let openhat_sg = document.getElementById("openhat-sg");

let clap_btn = document.getElementById("clap-btn");
let hithat_btn = document.getElementById("hithat-btn");
let boom_btn = document.getElementById("boom-btn");
let ride_btn = document.getElementById("ride-btn");
let tom_btn = document.getElementById("tom-btn");
let tink_btn = document.getElementById("tink-btn");
let kick_btn = document.getElementById("kick-btn");
let snare_btn = document.getElementById("snare-btn");
let openhat_btn = document.getElementById("openhat-btn");
/*
var clp = false;
var hit = false;
var bom = false;
var rid = false;
var tom = false;
var tin = false;
var kic = false;
var snr = false;
var oph = false;
*/
clap_btn.addEventListener("click", () => {
    if(clap_sg.ended()){
        clap_sg.currentTime = 0;
        clap_sg.play();
    }
})

hithat_btn.addEventListener("click", () => {
    if(hithat_sg.ended()){
        hithat_sg.currentTime = 0;
        hithat_sg.play();
    }
})

kick_btn.addEventListener("click", () => {
    if(kick_sg.ended()){
        kick_sg.currentTime = 0;
        kick_sg.play();
    }
})

openhat_btn.addEventListener("click", () => {
    if(openhat_sg.ended()){
        openhat_sg.currentTime = 0;
        openhat.play();
    }
})

boom_btn.addEventListener("click", () => {
    if(boom_sg.ended()){
        boom_sg.currentTime = 0;
        boom_sg.play();
    }
})

ride_btn.addEventListener("click", () => {
    if(ride_sg.ended()){
        ride_sg.currentTime = 0;
        ride_sg.play();
    }
})

snare_btn.addEventListener("click", () => {
    if(snare_sg.ended()){
        snare_sg.currentTime = 0;
        snare_sg.play();
    }
})

tom_btn.addEventListener("click", () => {
    if(tom_sg.ended()){
        tom_sg.currentTime = 0;
        tom_sg.play();
    }
})

tink_btn.addEventListener("click", () => {
    if(tink_sg.ended()){
        tink_sg.currentTime = 0;
        tink_sg.play();
    }
})