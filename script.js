let warriorBtn = document.querySelector(".warrior-btn");
let mageBtn = document.querySelector(".mage-btn");
let thiefBtn = document.querySelector(".thief-btn");
let conatiner = document.querySelectorAll(".container");
let buttons = document.querySelectorAll(".btn");


warriorBtn.addEventListener("click", () => {
  if (warriorBtn.classList.contains("active")) return; 

  warriorBtn.classList.add("active");

  const card = document.createElement("div");
  card.style.borderTop = "4px ridge var(--golden-yellow)";
  card.style.borderBottom = "4px groove var(--golden-yellow)";
  card.style.borderRight = "4px ridge var(--golden-yellow)";
  card.style.borderLeft = "4px groove var(--golden-yellow)";
  card.style.borderRadius = "8px";
  card.style.margin = "15px";
  card.style.width = "150px";
  card.style.height = "150px";

  document.body.appendChild(card);
});

