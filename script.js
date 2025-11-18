
const customMessage = "hai sayaangku, kamuu jangan marah marah teruss yaa, kasian cowomu ini kalau kamu marah dia bingung gimana ngadepin kamuu:)";


const contentContainer = document.getElementById('content-container');


const styledMessage = `<p id="typewriter-text" style="font-size: 1.5em; color: var(--dark-pink); font-weight: bold;"></p>`;


contentContainer.innerHTML = styledMessage;

// Dapatkan elemen P tempat teks akan diketik
const typewriterTextElement = document.getElementById('typewriter-text');

// --- FUNGSI TYPEWRITER EFFECT ---
function typeWriter(text, i, fnCallback) {
    // Jika masih ada karakter yang harus diketik
    if (i < text.length) {
        // Tambahkan satu karakter ke elemen
        typewriterTextElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';

        // Panggil lagi fungsi ini setelah jeda (kecepatan ketikan)
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback);
        }, 80); // Jeda 80 milidetik (Anda bisa mengubah angka ini)
    } else if (fnCallback) {
        // Jika teks sudah selesai, panggil fungsi callback
        typeWriterTextElement.innerHTML = text.substring(0, i) + '<span class="cursor"></span>';
        fnCallback();
    }
}

// Mulai efek pengetikan
typeWriter(customMessage, 0, function() {
    console.log("Pengetikan selesai.");
});


// B. MEMUTAR MUSIK SECARA OTOMATIS (Sama seperti sebelumnya, perlu interaksi pengguna)
const musicPlayer = document.getElementById('background-music');

document.addEventListener('click', function handler() {
    musicPlayer.volume = 0.5;
    musicPlayer.play().then(() => {
        document.removeEventListener('click', handler);
        console.log("Musik diputar setelah klik pertama pengguna.");
    }).catch(error => {
        console.log("Gagal memutar musik setelah klik:", error);
    });
});