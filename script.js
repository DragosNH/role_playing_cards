let warriorBtn = document.querySelector(".warrior-btn");
let mageBtn = document.querySelector(".mage-btn");
let thiefBtn = document.querySelector(".thief-btn");
let conatiner = document.querySelectorAll(".container");
let buttons = document.querySelectorAll(".btn");

function createCard(button, title) {
    if (button.classList.contains("active")) return;

    button.classList.add("active");


    const card = document.createElement("div");
    card.classList.add("char-card");
    
    const header = document.createElement("div");
    header.classList.add("card-header");

    const charName = document.createElement("h2");
    charName.textContent = title;

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "X";
    closeBtn.addEventListener("click", () => {
        card.remove();
        button.classList.remove("active");
    })

    const playerName = document.createElement("input")
    playerName.addEventListener("keydown", e=>{
        if(e.key === 'Enter'){
            const addedPlayerName = document.createElement("h3");
            addedPlayerName.innerText = playerName.value;
            playerName.remove();
            card.appendChild(addedPlayerName);

        }
    })

    // Append elements
    card.appendChild(header);
    card.appendChild(playerName);

    header.appendChild(closeBtn);
    header.appendChild(charName);

    document.body.appendChild(card);
}


warriorBtn.addEventListener("click", () => {
    createCard(warriorBtn, "Warrior");
});

mageBtn.addEventListener("click", () => {
    createCard(mageBtn, "Mage");
});

thiefBtn.addEventListener("click", () => {
    createCard(thiefBtn, "Thief");
});

