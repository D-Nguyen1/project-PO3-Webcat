console.log("test loading...");
const anime2Container= document.querySelector(".narutoContainer");

fetch("http://localhost:3000/data/naruto")
  .then((data) => data.json())
  .then((myjsondata) => showCards(myjsondata));
 
function showCards(narutoAnime) {
  console.log(narutoAnime);
  let htmlCode = "";
  for (let i = 0; i < narutoAnime.length; i++) {
    const naruto = narutoAnime[i];
    htmlCode += createCard(naruto);
  }
  anime2Container.innerHTML = htmlCode;
}
 
function createCard(naruto) {
  const card = `
    <div class="card">
      <img src="${naruto.imageURL}">
      <div class="card-content">
        <h1 class="card-title">${naruto.name}</h1>
        <p class="card-description">${naruto.description}</p>
        <p class="card-details">${naruto.creator}<br>
        ${naruto.character}<br>
        ${naruto.date}<br>
        ${naruto.category}<br>
        </p>
      </div>
    </div>
 `;
  return card;
}
 
