// MOBILE MENU

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if(menuBtn && navbar){

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

}

// HEADER SCROLL EFFECT

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#0a0a0a";
    }
    else{
        header.style.background = "rgba(0,0,0,0.4)";
    }

});

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

if(counters.length > 0){

    counters.forEach(counter => {

        counter.innerText = '0';

        const updateCounter = () => {

            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / 100;

            if(count < target){

                counter.innerText =
                `${Math.ceil(count + increment)}`;

                setTimeout(updateCounter, 30);

            }
            else{
                counter.innerText = target;
            }

        };

        updateCounter();

    });

}

// HERO SLIDER

const slides = document.querySelectorAll(".slide");

if(slides.length > 0){

    let currentSlide = 0;

    function showSlide(index){

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        slides[index].classList.add("active");

    }

    function nextSlide(){

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }

    setInterval(nextSlide, 5000);

}

// SCROLL REVEAL

window.addEventListener("scroll", reveal);

function reveal(){

    const reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++){

        const windowHeight = window.innerHeight;

        const revealTop =
        reveals[i].getBoundingClientRect().top;

        const revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }

    }

}

reveal();

// IMAGE POPUP MODAL

const galleryImages =
document.querySelectorAll(".gallery-item img");

const imageModal =
document.querySelector(".image-modal");

const modalImage =
document.querySelector(".modal-image");

const closeModal =
document.querySelector(".close-modal");

if(galleryImages.length > 0 &&
imageModal &&
modalImage &&
closeModal){

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            imageModal.classList.add("active");

            modalImage.src = image.src;

        });

    });

    closeModal.addEventListener("click", () => {

        imageModal.classList.remove("active");

    });

    imageModal.addEventListener("click", (e) => {

        if(e.target === imageModal){

            imageModal.classList.remove("active");

        }

    });

}

// GOLD PARTICLES

const particles = document.querySelector(".particles");

if(particles){

    for(let i = 0; i < 50; i++){

        let particle =
        document.createElement("span");

        let size = Math.random() * 4 + 2;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.left =
        Math.random() * window.innerWidth + "px";

        particle.style.animationDuration =
        Math.random() * 10 + 5 + "s";

        particle.style.animationDelay =
        Math.random() * 5 + "s";

        particles.appendChild(particle);

    }

}

// FAQ ACCORDION

const faqItems =
document.querySelectorAll(".faq-item");

if(faqItems.length > 0){

    faqItems.forEach(item => {

        const question =
        item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });

}

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {

    quoteForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const whatsappMessage =
`Hello Timber & Door Haven,

Name: ${name}
Email: ${email}
Phone: ${phone}

Project Details:
${message}`;

        window.open(
            `https://wa.me/260768243474?text=${encodeURIComponent(whatsappMessage)}`,
            "_blank"
        );

    });

}