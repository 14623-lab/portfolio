// ==========================
// นาฬิกา
// ==========================

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const date = now.toLocaleDateString("th-TH", options);
    const time = now.toLocaleTimeString("th-TH");

    clock.innerHTML = `${date}<br>${time}`;
}

updateClock();
setInterval(updateClock, 1000);

// ==========================
// เอฟเฟกต์การ์ด
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});

// ==========================
// เอฟเฟกต์เปิดเว็บ
// ==========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
