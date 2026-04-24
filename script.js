// Wait until page loads (IMPORTANT FIX)
window.onload = function () {

    // Image Slider with Fade
    let images = [
        "https://via.placeholder.com/600x300?text=Event+1",
        "https://via.placeholder.com/600x300?text=Event+2",
        "https://via.placeholder.com/600x300?text=Event+3"
    ];

    let index = 0;
    let slide = document.getElementById("slide");

    function showSlide() {
        slide.style.opacity = 0;

        setTimeout(() => {
            slide.src = images[index];
            slide.style.opacity = 1;
        }, 400);
    }

    window.nextSlide = function () {
        index = (index + 1) % images.length;
        showSlide();
    }

    window.prevSlide = function () {
        index = (index - 1 + images.length) % images.length;
        showSlide();
    }

    setInterval(window.nextSlide, 3000);

    // Toggle Event Details
    window.toggleDetails = function (id) {
        let x = document.getElementById(id);
        x.style.display = (x.style.display === "block") ? "none" : "block";
    }

    // Budget Calculator
    window.calculateBudget = function () {
        let venue = Number(document.getElementById("venue").value);
        let catering = Number(document.getElementById("catering").value);
        let decor = Number(document.getElementById("decor").value);

        let total = venue + catering + decor;

        document.getElementById("total").innerText = "Total Budget: ₹" + total;
    }

    // Accordion Animation
    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            let panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // Contact Button
    window.contact = function () {
        alert("Message Sent Successfully!");
    }

    // Scroll Fade-in Animation
    let faders = document.querySelectorAll(".fade");

    function showOnScroll() {
        faders.forEach(el => {
            let rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);

    // Run once on load
    showOnScroll();
}