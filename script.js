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

    const emptyDiv = document.createElement("div");
    emptyDiv.style.width = "5px"

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
    let rage = document.createElement("p");
    let rageValue = 0;
    let mana = document.createElement("p");
    let manaValue = 100;
    let strenght = document.createElement("p");
    let strenghtValue = 10;
    let intellect = document.createElement("p");
    let intellectValue = 10;
    let restBtn = document.createElement("Button");
    restBtn.innerText = "Rest";

    restBtn.addEventListener("click", () => {
        staminaValue += 15;
        healthValue += 10;

        if (button === warriorBtn) {
            if (staminaValue >= 150) {
                staminaValue = 150
            }
        }
        if (button === mageBtn) {
            if (staminaValue >= 80) {
                staminaValue = 80
            }
        }
        if (button === thiefBtn) {
            if (staminaValue >= 120) {
                staminaValue = 120
            }
        }

        if (healthValue >= 100) {
            healthValue = 100
        }
        rest()
    })

    const rest = () => {
        stamina.innerText = `Stamina: ${staminaValue}`;
        health.innerText = `Health: ${healthValue}`;
    }




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

    // Charcter's money
    const moneyCount = document.createElement("div");
    moneyCount.classList.add("moneyContainer");

    let moneyValue = 0
    let moneyTitle = document.createElement("h3");

    function updateMoney() {
        moneyTitle.textContent = `Money: ${moneyValue}`;
    }

    updateMoney();

    const plusOne = document.createElement("button");
    plusOne.classList.add("money-btn");
    plusOne.innerText = "+1";

    const minusOne = document.createElement("button");
    minusOne.classList.add("money-btn");
    minusOne.innerText = "-1";

    const plusFive = document.createElement("button");
    plusFive.classList.add("money-btn");
    plusFive.innerText = "+5";

    const minusFive = document.createElement("button");
    minusFive.classList.add("money-btn");
    minusFive.innerText = "-5";

    const plusTen = document.createElement("button");
    plusTen.classList.add("money-btn");
    plusTen.innerText = "+10";

    const minusTen = document.createElement("button");
    minusTen.classList.add("money-btn");
    minusTen.innerText = "-10";

    plusOne.addEventListener('click', () => {
        moneyValue++;
        updateMoney();
    });

    plusFive.addEventListener('click', () => {
        moneyValue += 5;
        updateMoney();
    });

    plusTen.addEventListener('click', () => {
        moneyValue += 10;
        updateMoney();
    });

    minusOne.addEventListener('click', () => {
        moneyValue--;
        updateMoney();
        if (moneyValue <= 0) {
            moneyValue = 1
        }
    });

    minusFive.addEventListener('click', () => {
        moneyValue -= 5;
        updateMoney();
        if (moneyValue <= 0) {
            moneyValue = 5
        }
    });

    minusTen.addEventListener('click', () => {
        moneyValue -= 10;
        updateMoney();
        if (moneyValue <= 0) {
            moneyValue = 10
        }
    });

    // ------ Weapons ------
    const weaponsTitle = document.createElement("h3");
    weaponsTitle.innerText = "Weapons";
    const weaponsContainer = document.createElement("div");
    weaponsContainer.classList.add("weapons");
    const secWeaponContainer = document.createElement("div");
    secWeaponContainer.classList.add("secondary-weapon");


    let characterMainWeapon = document.createElement("p");
    let characterSecondaryWeapon = document.createElement("p");
    let ammo = 0;
    const reduceAmmo = document.createElement("button");
    reduceAmmo.classList.add("money-btn");

    reduceAmmo.innerText = "-";

    reduceAmmo.addEventListener("click", () => {
        ammo--;
        reduce_ammo();
    })


    function reduce_ammo() {
        if (button === warriorBtn) {
            characterSecondaryWeapon.textContent = `Bow: ${ammo} arrows`;
            if (ammo <= 1) { ammo = 1 }
        }
        if (button === mageBtn) {
            characterSecondaryWeapon.textContent = `Bomb: ${ammo}`
            if (ammo <= 1) { ammo = 1 }
        }
        if (button === thiefBtn) {
            characterSecondaryWeapon.textContent = `Trowing knifes: ${ammo}`
            if (ammo <= 1) { ammo = 1 }
        }
    }
    reduce_ammo()

    // ------ Attcks ------
    const attacksList = document.createElement("h3");
    const attacksContainer = document.createElement("div");
    const attacckLine = document.createElement("div");
    attacckLine.classList.add("attack-line");
    const normalAttack = document.createElement("p");
    const normalAttackBtn = document.createElement("button");
    normalAttackBtn.innerText = "Use";

    normalAttackBtn.addEventListener("click", () => {
        staminaValue -= Math.floor(Math.random() * 10) + 5;
        if (button === warriorBtn) {
            rageValue += 10;
            if (rageValue >= 100) {
                rageValue = 100
            }
        }
        if (staminaValue <= 0) {
            healthValue -= Math.floor(Math.random() * 5) + 1;
        }

        reduce_stamina_normal_attack()
    })

    const reduce_stamina_normal_attack = () => {
        stamina.innerText = `Stamina: ${staminaValue}`;
        rage.innerText = `Rage: ${rageValue}`;
        if (staminaValue <= 0) {
            health.innerText = `Health: ${healthValue}`;
            staminaValue = 0;
            if (healthValue <= 0) {
                card.remove()
            }
        }
    }

    reduce_stamina_normal_attack()



    // Stats according to class
    if (button === warriorBtn) {
        health.innerText = "Health: " + healthValue;
        staminaValue += 50
        manaValue -= 20
        mana.innerText = "Mana: " + manaValue;
        rage.innerText = "Rage: " + rageValue;
        strenght.innerText = "Strenght: " + strenghtValue;
        intellectValue -= 6;
        intellect.innerText = "Intellect: " + intellectValue;

        characterMainWeapon.innerText = "Sword";
        ammo = 20;
        reduce_ammo()

        attacksList.innerText = title + "'s Attacks";
        normalAttack.innerText = "Normal Attack";
        reduce_stamina_normal_attack()


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

        characterMainWeapon.innerText = "Staff";
        ammo = 5;
        reduce_ammo()

        attacksList.innerText = title + "'s Attacks";
        normalAttack.innerText = "Normal Attack"


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

        characterMainWeapon.innerText = "Dagger x2";
        ammo = 15;
        reduce_ammo()

        attacksList.innerText = title + "'s Attacks";
        normalAttack.innerText = "Normal Attack"


    }

    // Append elements
    cardsContainer.appendChild(card);

    card.appendChild(header);
    card.appendChild(playerNameInput);
    card.appendChild(statsDiv);
    statsDiv.appendChild(health);
    statsDiv.appendChild(stamina);
    statsDiv.appendChild(mana);
    statsDiv.appendChild(rage);
    statsDiv.appendChild(strenght);
    statsDiv.appendChild(intellect);
    statsDiv.appendChild(restBtn);
    card.appendChild(itemsTitle);
    card.appendChild(itemsInput);
    card.appendChild(moneyCount);
    card.appendChild(weaponsTitle);
    card.appendChild(weaponsContainer);
    card.appendChild(secWeaponContainer);
    card.appendChild(attacksList);
    card.appendChild(attacksContainer);

    attacksContainer.appendChild(attacckLine);
    attacckLine.appendChild(normalAttack);
    attacckLine.appendChild(normalAttackBtn);

    weaponsContainer.appendChild(characterMainWeapon);
    weaponsContainer.appendChild(characterSecondaryWeapon);
    weaponsContainer.appendChild(reduceAmmo);
    secWeaponContainer.appendChild(characterSecondaryWeapon);
    secWeaponContainer.appendChild(reduceAmmo);

    moneyCount.appendChild(moneyTitle);
    moneyCount.appendChild(plusTen);
    moneyCount.appendChild(plusFive);
    moneyCount.appendChild(plusOne);
    moneyCount.appendChild(minusOne);
    moneyCount.appendChild(minusFive);
    moneyCount.appendChild(minusTen);

    header.appendChild(closeBtn);
    header.appendChild(charName);
    header.appendChild(emptyDiv);

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
