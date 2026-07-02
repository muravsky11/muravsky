const dropDate = new Date("2026-09-01T20:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = dropDate - now;

  if (distance <= 0) {
    document.querySelector(".countdown").innerHTML = "<p>DROP IS LIVE</p>";
    return;
  }

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((distance / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText = Math.floor((distance / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);