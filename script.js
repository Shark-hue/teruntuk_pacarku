// --- BAGIAN A: TYPEWRITER EFFECT (Sama seperti sebelumnya) ---

const customMessage = "maaf ya sayaang aku bikin kamu cemburu, tapi yang perlu kamu tau, aku milik kamu dan kamu milik aku ";
const contentContainer = document.getElementById('content-container');
// Pastikan warna teks typewriter sesuai dengan skema elegan hitam dan pink
const styledMessage = `<p id="typewriter-text" style="font-size: 1.5em; color: var(--accent-pink); font-weight: bold;"></p>`;
contentContainer.innerHTML = styledMessage;
const typewriterTextElement = document.getElementById('typewriter-text');

function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        typewriterTextElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback);
        }, 80);
    } else if (fnCallback) {
        typewriterTextElement.innerHTML = text.substring(0, i) + '<span class="cursor"></span>';
        fnCallback();
    }
}

// Mulai efek pengetikan segera setelah website dibuka
typeWriter(customMessage, 0, function() {
    console.log("Pengetikan pesan selesai.");
});


// --- BAGIAN B: ANIMASI EMOTICON HATI ---

const heartAnimationArea = document.getElementById('heart-animation-area');

function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart');
    heart.innerHTML = '💖'; // Emoticon hati

    // Posisi acak di bagian bawah area animasi
    const startX = Math.random() * (heartAnimationArea.offsetWidth - 30); // 30 adalah kira-kira lebar hati
    heart.style.left = `${startX}px`;
    heart.style.bottom = '-20px'; // Mulai dari bawah layar, sedikit di luar

    // Jeda animasi acak untuk efek yang lebih alami
    const animationDelay = Math.random() * 2; // Delay hingga 2 detik
    heart.style.animationDelay = `${animationDelay}s`;

    // Durasi animasi acak
    const animationDuration = 4 + Math.random() * 3; // Durasi 4-7 detik
    heart.style.animationDuration = `${animationDuration}s`;

    heartAnimationArea.appendChild(heart);

    // Hapus hati setelah animasinya selesai
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Buat hati-hati secara berkala
setInterval(createHeart, 500); // Setiap 0.5 detik, satu hati baru muncul



