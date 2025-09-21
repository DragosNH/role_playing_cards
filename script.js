let warriorBtn = document.querySelector(".warrior-btn");
let mageBtn = document.querySelector(".mage-btn");
let thiefBtn = document.querySelector(".thief-btn");
let conatiner = document.querySelectorAll(".container");
let buttons = document.querySelectorAll(".btn");

const cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards");

function createCard(button, title) {
    if (button.classList.contains("active")) return;

    button.classList.add("active");


    const card = document.createElement("div");
    card.classList.add("char-card");

    const header = document.createElement("div");
    header.classList.add("card-header");

    const charName = document.createElement("h2");
    charName.textContent = title;

    // Created close button that closes the card
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "X";
    closeBtn.addEventListener("click", () => {
        card.remove();
        button.classList.remove("active");
    })


    // Add a name to the character and then remove the input
    const playerNameInput = document.createElement("input");
    playerNameInput.addEventListener("keydown", e => {
        if (e.key === 'Enter') {
            const playerName = document.createElement("h3");
            playerName.innerText = playerNameInput.value;
            playerNameInput.replaceWith(playerName);
        }
    });

    // Stats
    const statsDiv = document.createElement("div");
    let health = document.createElement("p");
    let healthValue = 100;
    let stamina = document.createElement("p");
    let staminaValue = 100;
    let mana = document.createElement("p");
    let manaValue = 100;
    let strenght = document.createElement("p");
    let strenghtValue = 10;
    let intellect = document.createElement("p");
    let intellectValue = 10;

    // Add items to the character
    const itemsTitle = document.createElement("h3");
    itemsTitle.innerText = "Items";

    const itemsInput = document.createElement("input");
    let itemsCount = 0;
    itemsInput.addEventListener("keydown", e => {
        if (e.key === "Enter" && itemsCount < 3) {
            const itemsDiv = document.createElement("div");
            itemsDiv.classList.add("itemsContainer");

            let newItem = document.createElement("p");
            newItem.classList.add("new-item");
            newItem.innerText = itemsInput.value;

            let removeItem = document.createElement("button");
            removeItem.classList.add("removeItemBtn");
            removeItem.innerText = "X";

            removeItem.addEventListener("click", () => {
                itemsDiv.remove();
                itemsCount--;

                if (itemsCount < 3 && !card.contains(itemsInput)) {
                    card.appendChild(itemsInput);
                }
            });

            itemsInput.before(itemsDiv);
            itemsInput.value = "";
            itemsCount++;
            if (itemsCount === 3) {
                itemsInput.remove();
            }



            itemsDiv.appendChild(newItem);
            itemsDiv.appendChild(removeItem);
        }
    });

    if (button === warriorBtn) {
        health.innerText = "Health: " + healthValue;
        staminaValue += 50
        stamina.innerText = "Stamina: " + staminaValue;
        manaValue -= 20
        mana.innerText = "Mana: " + manaValue;
        strenght.innerText = "Strenght: " + strenghtValue;
        intellectValue -= 6;
        intellect.innerText = "Intellect: " + intellectValue;
    }
    if (button === mageBtn) {
        health.innerText = "Health: " + healthValue;
        staminaValue -= 20
        stamina.innerText = "Stamina: " + staminaValue;
        manaValue += 50
        mana.innerText = "Mana: " + manaValue;
        strenghtValue -= 4
        strenght.innerText = "Strenght: " + strenghtValue;
        intellect.innerText = "Intellect: " + intellectValue;

    }
    if (button === thiefBtn) {
        health.innerText = "Health: " + healthValue;
        staminaValue += 20
        stamina.innerText = "Stamina: " + staminaValue;
        mana.innerText = "Mana: " + manaValue;
        strenghtValue -= 2
        strenght.innerText = "Strenght: " + strenghtValue;
        intellectValue -= 4;
        intellect.innerText = "Intellect: " + intellectValue;

    }

    // Append elements
    cardsContainer.appendChild(card);

    card.appendChild(header);
    card.appendChild(playerNameInput);
    card.appendChild(statsDiv);
    statsDiv.appendChild(health);
    statsDiv.appendChild(stamina);
    statsDiv.appendChild(mana);
    statsDiv.appendChild(strenght);
    statsDiv.appendChild(intellect);
    card.appendChild(itemsTitle);
    card.appendChild(itemsInput);

    header.appendChild(closeBtn);
    header.appendChild(charName);

    document.body.appendChild(cardsContainer);
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

