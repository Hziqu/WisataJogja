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
x
    if (!found) {
        alert("Halaman tidak ditemukan!");
    }
}
