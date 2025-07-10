function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle('sideMenuHide')
}

const howManyNeed = [150, 0.5, 0.5, 10, 1, 1, 1, 1, 0.5];
const ingredients = ["Hähnchenbrustfilet", "Paprika (rot oder gelb)", "Zucchini", "g Erbsen", "große Tomate(n)", "Mohrrübe(n)", "kleine Zwiebel(n)", "EL Olivenöl", "TL Kräuter der Provence (oder nach Geschmack)"];

function init() {
    renderPageContainer();
  };


function renderPageContainer() {
  document.getElementById("pageContainer").innerHTML = renderPageContainerTemplate();
  renderPageContent();
}

function renderPageContent() {
  document.getElementById("selectOptions").innerHTML = renderSelectOptions();
  document.getElementById("accessoriesContainer").innerHTML = renderAccessoriesContainerTemplate();
  document.getElementById("preparationContainer").innerHTML = renderPreparationContainerTemplate();
  document.getElementById("ingredientsContainer").innerHTML = '';
  for (let i = 0; i < howManyNeed.length; i++) {
    let cssClass = (i % 2 !== 0) ? 'white' : 'grey';
    let countRef = `count-${i}`;
    let counter = howManyNeed[i];
    let ingredientName = ingredients[i];
  document.getElementById("ingredientsContainer").innerHTML += renderStandardTemplate(cssClass, countRef, counter, ingredientName);
}
}


function calculatePortion() {
  let portion = parseFloat(document.getElementById("input").value);
  if (!checkInputValue(portion)) {
    return;
  }
  document.getElementById("ingredientsContainer").innerHTML = '';
  for (let i = 0; i < howManyNeed.length; i++) {
    let calculatedPortion = portion * howManyNeed[i];
    let cssClass = (i % 2 !== 0) ? 'white' : 'grey';
    let ingredientName = ingredients[i];
    let countRef = `count-${i}`;
    document.getElementById("ingredientsContainer").innerHTML += ingredientsTemplate(cssClass, countRef, calculatedPortion, ingredientName);
  }
}
function checkInputValue(portion) {
  if (portion > 21) {
    alert('Es sind nur max 21 Portionen zu errechnen!')
    document.getElementById('input').value = 1;
    init();
    return false;
  } else if (portion < 1 || isNaN(portion)) {
    alert('Es muss mindestens 1 Portion sein')
    document.getElementById('input').value = 1;
    init();
    return false;
  }
  return true
}

// function calculatePortionTwo() {
//   let portionTwo = document.getElementById('portionSelect').value;
//   for (let i = 0; i < howManyNeed.length; i++) {
//     let calculatedPortionTwo = portionTwo * howManyNeed[i];
//     document.getElementById(howManyDiv[i]).innerText = calculatedPortionTwo;
//   }
// }
