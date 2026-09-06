const games = [
{
name: "Gubby Clicker",
icon: "🟣",
description: "Click the Gubby. Make numbers go stupidly high.",
tag: "COMING SOON"
},

{
name: "Gubby Chaos",
icon: "💥",
description: "A ridiculous chaos game filled with things we haven't invented yet.",
tag: "COMING SOON"
},

{
name: "Gubby Obby",
icon: "🏃",
description: "Jump, dodge and somehow survive the world's silliest obstacle course.",
tag: "COMING SOON"
},

{
name: "Gubby Shop",
icon: "🛒",
description: "Collect coins and buy completely unnecessary Gubby stuff.",
tag: "COMING SOON"
},

{
name: "Mystery Gubby",
icon: "❓",
description: "Nobody knows what this game does. Not even Gubby.",
tag: "COMING SOON"
},

{
name: "???",
icon: "👁️",
description: "Reserved for the next game we make.",
tag: "SECRET"
}
];

/* GAME CARDS */

const menu = document.getElementById("gameMenu");

games.forEach((game) => {
const card = document.createElement("article");

card.className = "game-card";

card.innerHTML = ` <div class="icon">${game.icon}</div>

```
<h3>${game.name}</h3>

<p>${game.description}</p>

<span class="tag">${game.tag}</span>
```

`;

card.addEventListener("click", () => {
modalTitle.textContent = game.name;
modalIcon.textContent = game.icon;
modalDescription.textContent = game.description;

```
modal.classList.remove("hidden");
```

});

menu.appendChild(card);
});

/* PAGE NAVIGATION */

function showPage(id) {
document
.querySelectorAll(".page")
.forEach(page => page.classList.remove("active"));

document
.getElementById(id)
.classList.add("active");

window.scrollTo({
top: 0,
behavior: "smooth"
});
}

document.getElementById("homeBtn").onclick = () => {
showPage("homePage");
};

document.getElementById("aboutBtn").onclick = () => {
showPage("aboutPage");
};

document.getElementById("backBtn").onclick = () => {
showPage("homePage");
};

/* MODAL */

const modal = document.getElementById("gameModal");

const modalTitle =
document.getElementById("modalTitle");

const modalIcon =
document.getElementById("modalIcon");

const modalDescription =
document.getElementById("modalDescription");

const closeModal =
document.getElementById("closeModal");

const playBtn =
document.getElementById("playBtn");

closeModal.onclick = () => {
modal.classList.add("hidden");
};

/* PLAY */

playBtn.onclick = () => {
alert(
"This game isn't built yet! We'll make it next. 🎮"
);
};

/* CLOSE WHEN CLICKING OUTSIDE */

modal.addEventListener("click", (event) => {
if (event.target === modal) {
modal.classList.add("hidden");
}
});

/* ESCAPE KEY */

document.addEventListener("keydown", (event) => {
if (event.key === "Escape") {
modal.classList.add("hidden");
}
});
