const container = document.querySelectorAll('.fade');

window.addEventListener('scroll',containerScroll);

containerScroll();

function containerScroll() {
    const trigger = window.innerHeight / 5 * 4 ;
    container.forEach((container,idx) => {
        const content = container.getBoundingClientRect().top;
        if(content < trigger) {
            container.classList.add('show');
        } else {
            container.classList.remove('show')
        }
    })
}




// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


// Search Fungsi
function handleSearch(event, inputId) {
    event.preventDefault();
    let query = document.getElementById(inputId).value.toLowerCase();

    let links = document.querySelectorAll(".nav-links a");
    let found = false;

    links.forEach(link => {
        if (link.innerText.toLowerCase().includes(query)) {
            window.location.href = link.href;
            found = true;
        }
    });

    if (!found) {
        alert("Halaman tidak ditemukan!");
    }
}

document
    .getElementById("searchFormNav")
    .addEventListener("submit", event => handleSearch(event, "searchInputNav"));

document
    .getElementById("searchFormMobile")
    .addEventListener("submit", event =>
        handleSearch(event, "searchInputMobile")
    );


// carousel
let index = 0;
const carouselInner = document.querySelector(".carousel-inner");
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function autoSlide() {
    index++;
    if (index < totalSlides) {
        carouselInner.style.transition =
            "transform 0.5s ease-in-out";
        carouselInner.style.transform = `translateX(-${index * 100
            }%)`;
    } else {
        setTimeout(() => {
            carouselInner.style.transition = "none";
            index = 0;
            carouselInner.style.transform = `translatex(0)`;
        }, 500);
    }
}

setInterval(autoSlide, 2500);
// end carousel

const dropDisplay = document.getElementById("dropdown-btn")
const list = document.getElementById('dropdown-content')
dropDisplay.addEventListener("click", () => {
    list.classList.toggle("active")
});
const dropDisplays = document.getElementById("dropdown-btn-mobile")
const lists = document.getElementById('dropdown-content-mobile')
dropDisplays.addEventListener("click", () => {
    lists.classList.toggle("active")
});

