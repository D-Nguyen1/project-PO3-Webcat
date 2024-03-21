console.log("test loading...");
const animeContainer= document.querySelector(".dragonballContainer");

fetch("http://localhost:3000/data/db")
  .then((data) => data.json())
  .then((myjsondata) => showCards(myjsondata));
 
function showCards(dbAnime) {
  console.log(dbAnime);
  let htmlCode = "";
  for (let i = 0; i < dbAnime.length; i++) {
    const dragonBall = dbAnime[i];
    htmlCode += createCard(dragonBall);
  }
  animeContainer.innerHTML = htmlCode;
}
 
function createCard(dragonBall) {
  const card = `
    <div class="card">
      <img src="${dragonBall.imageURL}">
      <div class="card-content">
        <h1 class="card-title">${dragonBall.name}</h1>
        <p class="card-description">${dragonBall.description}</p>
        <p class="card-details">${dragonBall.creator}<br>
        ${dragonBall.character}<br>
        ${dragonBall.date}<br>
        ${dragonBall.category}<br>
        </p>
      </div>
    </div>
 `;
  return card;
}
 