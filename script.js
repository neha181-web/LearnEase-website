function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("show");
}

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') toggleMenu();
});

document.addEventListener('click', function(e) {
    const menu = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('show');
    }
});

const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Message sent successfully!');
    contactForm.reset();
});

// Modal logic
const modal = document.getElementById("enrollModal");
const openModalBtn = document.getElementById("openModal");
const closeModal = document.querySelector(".modal .close");

openModalBtn.addEventListener("click", () => modal.style.display = "block");
closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
    if(e.target == modal) modal.style.display = "none";
});

// Form submission
const enrollForm = document.getElementById("enrollForm");
enrollForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Enrolled successfully!");
    enrollForm.reset();
    modal.style.display = "none";
});
