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
        alert("Hanya Sebuah Replica!");
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


const fadeElement = document.getElementById('ScrollFade');
const onScroll = () => {
    const rect = fadeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        fadeElement.classList.add('visible');
    }
};
window.addEventListener('scroll', onScroll);

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

// const profileContent = document.querySelectorAll('.images')

// profileContent.forEach(profileContent => {
//     profileContent.addEventListener("click", () =>{
//         document.querySelector('.active')?.classList.remove('active');
//         profileContent.classList.add('active');
//     });
// });

