const navLinks = document.querySelectorAll(".navLink");
let isMobile = false;

if (window.screen.width <= 768) {
    isMobile = true;
}
let lastScrollTop = window.pageYOffset;
document.querySelector("#menuDrop").addEventListener("click", mobileMenuToggle);
if (!isMobile) {
    document.addEventListener("scroll", () => {
        let currentYPos = window.pageYOffset;
        const button = document.querySelector(".backToTopBtn");
        if (currentYPos <= 5) {
            button.classList.remove("revealElement");
            button.classList.add("hideElement");
        } else {
            button.classList.add("revealElement");
        }

    });
}
for (let link of navLinks) {
    link.addEventListener("click", mobileMenuToggle);
}

function mobileMenuToggle() {
    document.querySelector(".mobileDropdown").classList.toggle("revealElement");
}

const observerOptions = {
    root: document.querySelector(".pageWrapper"),
    rootMargin: "0px",
    threshold: 0.3
};

function observerCallback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
        }
    });
}

const fadeElements = document.querySelectorAll(".fade");
const enlargeElements = document.querySelectorAll(".flexContainer div");

const observer = new IntersectionObserver(observerCallback, observerOptions);
fadeElements.forEach(element => observer.observe(element));

for (let index of enlargeElements){
    index.addEventListener("mouseover",enlarge);
    index.addEventListener("mouseout",enlarge);
}
function enlarge() {
    this.classList.toggle("fadeEnlarge");
}