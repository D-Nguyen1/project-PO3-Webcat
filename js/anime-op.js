console.log("test loading...");
const anime3Container= document.querySelector(".opContainer");

fetch("http://localhost:3000/data/onepiece")
  .then((data) => data.json())
  .then((myjsondata) => showCards(myjsondata));
 
function showCards(animeSeries) {
  console.log(animeSeries);
  let htmlCode = "";
  for (let i = 0; i < animeSeries.length; i++) {
    const onePiece = animeSeries[i];
    htmlCode += createCard(onePiece);
  }
  anime3Container.innerHTML = htmlCode;
}
 
function createCard(onePiece) {
  const card = `
    <div class="card">
      <img src="${onePiece.imageURL}">
      <div class="card-content">
        <h1 class="card-title">${onePiece.name}</h1>
        <p class="card-description">${onePiece.description}</p>
        <p class="card-details">${onePiece.creator}<br>
        ${onePiece.character}<br>
        ${onePiece.date}<br>
        ${onePiece.category}<br>
        </p>
      </div>
    </div>
 `;
  return card;
}
 