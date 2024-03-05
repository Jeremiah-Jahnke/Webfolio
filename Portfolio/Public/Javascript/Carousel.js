setInterval(() => {
    const carousel = document.querySelector(".carousel");
    const firstItem = carousel.firstElementChild;

    carousel.style.transform = "translateX(-100%)";

    setTimeout(() => {
        carousel.appendChild(firstItem);
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
        setTimeout(() => {
            carousel.style.transition = "";
        }, 500);
    }, 1000);
}, 3000);
