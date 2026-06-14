document.getElementById("weather-updated").textContent =
"Tes berhasil";
document.getElementById("weather-updated").textContent =
"Tes berhasil";
async function loadPrayerTimes(){

try{

const response =
await fetch(
"https://api.aladhan.com/v1/timingsByCity?city=Bandung&country=Indonesia&method=11"
);

const data =
await response.json();

const timings =
data.data.timings;

document.getElementById("subuh").textContent =
timings.Fajr;

document.getElementById("dzuhur").textContent =
timings.Dhuhr;

document.getElementById("ashar").textContent =
timings.Asr;

document.getElementById("maghrib").textContent =
timings.Maghrib;

document.getElementById("isya").textContent =
timings.Isha;

}catch(error){

console.error(error);

}

}

loadPrayerTimes();
