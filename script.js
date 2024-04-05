// Ambil elemen video
var video = document.getElementById("myVideo");

// Ambil tombol mute
var muteButton = document.getElementById("muteButton");

// Fungsi untuk mute atau unmute video
function toggleMute() {
  if (video.muted) {
    // Jika video sudah mute, unmute video
    video.muted = false;
    muteButton.innerHTML = "Mute Suara";
  } else {
    // Jika video belum mute, mute video
    video.muted = true;
    muteButton.innerHTML = "Unmute";
  }
}

// Tambahkan event listener ke tombol mute
muteButton.addEventListener("click", toggleMute);

document.querySelector('.video-text').addEventListener("click", function() {
  alert("Ini video makarov");
});

document.querySelector('.audio-text').addEventListener("click", function() {
  alert("Ini audio captain price");
});

document.querySelector('.image-container').addEventListener("click", function() {
  alert("Anda akan diarahkan keluar dari halaman ini");
});