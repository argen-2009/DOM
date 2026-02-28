const userEL = document.getElementById("users");
console.log("userEL", userEL);

const users = [
    {
        name: "Арген Таалайбеков",
        role: "Frontend Developer",
        city: "Манас",
        avatar: "images/argen.png",
    },
    {
        name: "Алина Нурова",
        role: "UI/UX Designer",
        city: "Талас",
        avatar: "images/alina.png",
    },
    {
        name: "Макс Тилеков",
        role: "AI data size",
        city: "Бишкек",
        avatar: "images/maks.png",
    },
];

function createUserCard(user) {
    const cardEL = document.createElement("div");
    cardEL.classList.add("card");

    const imgEl = document.createElement("img");
    imgEl.classList.add("avatar");
    imgEl.src = user.avatar;
    imgEl.alt = user.name;

    const infoEl = document.createElement("div");

    const nameEL = document.createElement("h3");
    nameEL.classList.add("name");
    nameEL.textContent = user.name;

    const metaEL = document.createElement("p");
    metaEL.classList.add("meta");
    metaEL.textContent = `${user.role} • ${user.city}`;

    cardEL.append(imgEl, infoEl);
    
    infoEl.append(nameEL, metaEL);

    return cardEL;
}

for (let user of users) {
    const cardEL = createUserCard(user);
    userEL.append(cardEL);
}