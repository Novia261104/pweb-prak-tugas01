// script.js
const cards = document.querySelectorAll(".program-card");
const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 1; // Mulai dari kartu tengah (Bisindo)

function updateCarousel() {
    // Geser carousel ke posisi yang sesuai
    const translateX = -currentIndex * 220; // 220px adalah lebar kartu + jarak antar kartu
    carousel.style.transform = `translateX(${translateX}px)`;

    // Update efek kartu aktif
    cards.forEach((card, index) => {
        card.classList.remove("active");
        if (index === currentIndex) {
            card.classList.add("active");
        }
    });
}

// Event listener untuk tombol "Back"
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
});

// Event listener untuk tombol "Next"
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
});

