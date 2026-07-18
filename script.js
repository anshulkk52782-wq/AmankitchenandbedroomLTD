// Smooth scrolling for menu links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Reveal animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Floating WhatsApp Button
const whatsapp = document.createElement("a");

whatsapp.href = "https://wa.me/447442269599";
whatsapp.target = "_blank";
whatsapp.innerHTML = "💬";

whatsapp.style.position = "fixed";
whatsapp.style.bottom = "25px";
whatsapp.style.right = "25px";
whatsapp.style.width = "60px";
whatsapp.style.height = "60px";
whatsapp.style.background = "#25D366";
whatsapp.style.color = "#fff";
whatsapp.style.fontSize = "30px";
whatsapp.style.borderRadius = "50%";
whatsapp.style.display = "flex";
whatsapp.style.justifyContent = "center";
whatsapp.style.alignItems = "center";
whatsapp.style.textDecoration = "none";
whatsapp.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
whatsapp.style.zIndex = "9999";

document.body.appendChild(whatsapp);
