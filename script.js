let warriorBtn = document.querySelector(".warrior-btn");
let mageBtn = document.querySelector(".mage-btn");
let thiefBtn = document.querySelector(".thief-btn");
let conatiner = document.querySelectorAll(".container");
let buttons = document.querySelectorAll(".btn");

function createCard(button) {
    if (button.classList.contains("active")) return;

    button.classList.add("active");

    const card = document.createElement("div");
    card.style.borderTop = "4px ridge var(--golden-yellow)";
    card.style.borderBottom = "4px groove var(--golden-yellow)";
    card.style.borderRight = "4px ridge var(--golden-yellow)";
    card.style.borderLeft = "4px groove var(--golden-yellow)";
    card.style.borderRadius = "8px";
    card.style.margin = "15px";
    card.style.width = "150px";
    card.style.height = "150px";

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.style.borderTop = "4px ridge var(--golden-yellow)";
    closeBtn.style.borderBottom = "4px groove var(--golden-yellow)";
    closeBtn.style.borderRight = "4px ridge var(--golden-yellow)";
    closeBtn.style.borderLeft = "4px groove var(--golden-yellow)";
    closeBtn.style.background = "radial-gradient(circle, #8b0000, #8b0000)";
    closeBtn.style.fontSize = "25px";
    closeBtn.style.margin = "5px";
    closeBtn.style.color = "var(--golden-yellow)";
    closeBtn.style.borderRadius = "8px";
    closeBtn.addEventListener("click", () => {
        card.remove();
        button.classList.remove("active");
    })

    // Append elements
    card.appendChild(closeBtn)

    document.body.appendChild(card);
}


warriorBtn.addEventListener("click", () => {
    createCard(warriorBtn);
});

mageBtn.addEventListener("click", () => {
    createCard(mageBtn);
});

thiefBtn.addEventListener("click", () => {
    createCard(thiefBtn);
});

