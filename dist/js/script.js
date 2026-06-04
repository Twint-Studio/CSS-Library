function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    Object.assign(circle.style, {
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${event.offsetX - radius}px`,
        top: `${event.offsetY - radius}px`,
    });

    circle.classList.add("ripple");

    button.querySelector(".ripple")?.remove();

    button.appendChild(circle);
}

for (const button of document.querySelectorAll("button[data-ripple]")) {
    if (!button.classList.contains("tooltip")) {
        button.addEventListener("click", createRipple);
    }
}

for (const button of document.querySelectorAll("button[data-modal]")) {
    button.addEventListener("click", () => {
        document.getElementById(button.dataset.modal)?.showModal();
    });
}

for (const button of document.querySelectorAll(".close-btn")) {
    button.addEventListener("click", () => {
        button.closest("dialog")?.close();
    });
}

for (const dialog of document.querySelectorAll("dialog.modal")) {
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
    });
}