// Detectar elementos para el efecto scrollfade
document.addEventListener("scroll", () => {
    document.querySelectorAll(".scrollfade").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
            el.classList.add("show");
        }
    });
});

// Lanzar detección inicial al cargar
window.addEventListener("load", () => {
    document.dispatchEvent(new Event("scroll"));
});
