console.log("test loading...");
const animeContainer= document.querySelector(".animeOPcontainer");

fetch(" ")
  .then((data) => data.json())
  .then((myjsondata) => showCards(myjsondata));
 
function showCards(animeSeries) {
  console.log(animeSeries);
  let htmlCode = "";
  for (let i = 0; i < animeSeries.length; i++) {
    const animeSerie = animeSeries[i];
    htmlCode += createCard(animeSerie);
  }
  cardContainer.innerHTML = htmlCode;
}
 
function createCard(animeSerie) {
  const card = `
    <div class="card">
      <img src="${animeSerie.imageURL}">
      <div class="card-content">
        <h1 class="card-title">${animeSerie.name}</h1>
        <p class="card-description">${animeSerie.description}</p>
        <p class="card-details">${animeSerie.creator}<br>
        ${animeSerie.character}<br>
        ${animeSerie.date}<br>
        ${animeSerie.category}<br>
        </p>
      </div>
    </div>
 `;
  return card;
}
 