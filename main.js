const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

} else {

entry.target.classList.remove("show");

}

});

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => {

observer.observe(el);

});

function showCertificate(imageName){

const preview =
document.getElementById("certificate-preview");

const img =
document.getElementById("certificate-image");

if(
preview.style.display === "block" &&
img.src.includes(imageName)
){

preview.style.display = "none";

}else{

img.src = imageName;

preview.style.display = "block";

}

}
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

if(!playing){

music.play();
musicBtn.innerHTML = "🔊";
playing = true;

}else{

music.pause();
musicBtn.innerHTML = "🎵";
playing = false;

}

});
function updateClocks(){

document.getElementById("saudi-time").textContent =
new Date().toLocaleTimeString("id-ID",{
timeZone:"Asia/Riyadh"
});

document.getElementById("egypt-time").textContent =
new Date().toLocaleTimeString("id-ID",{
timeZone:"Africa/Cairo"
});

document.getElementById("london-time").textContent =
new Date().toLocaleTimeString("id-ID",{
timeZone:"Europe/London"
});

document.getElementById("indo-time").textContent =
new Date().toLocaleTimeString("id-ID",{
timeZone:"Asia/Jakarta"
});

}

updateClocks();
setInterval(updateClocks,1000);

const welcomeText = document.getElementById("welcomeText");
const nameText = document.getElementById("nameText");
const descText = document.getElementById("descText");

const welcomeString = "Assalamu'alaikum 👋";
const nameString = "M. Fairuz Najib Athoilah";
const descString = "Santri • Arabic Learner • Creator | Future International Student";

welcomeText.textContent = "";
nameText.textContent = "";
descText.textContent = "";

function typeText(element, text, speed, callback){
let i = 0;

const typing = setInterval(() => {

element.textContent += text.charAt(i);

i++;

if(i >= text.length){
clearInterval(typing);

if(callback) callback();
}

}, speed);

}

typeText(welcomeText, welcomeString, 50, () => {

typeText(nameText, nameString, 70, () => {

typeText(descText, descString, 30);

});

});
