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
