
const howManyNeed = [150, 0.5, 0.5, 10, 1, 1, 1, 1, 0.5];
const ingredients = ["Hähnchenbrustfilet", "Paprika (rot oder gelb)", "Zucchini", "g Erbsen", "große Tomate(n)", "Mohrrübe(n)", "kleine Zwiebel(n)", "EL Olivenöl", "TL Kräuter der Provence (oder nach Geschmack)"];

function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle('sideMenuHide')
}

function init() {
  renderPageContainer();
  renderPageContent();
};

function renderPageContainer() {
  document.getElementById("pageContainer").innerHTML = renderPageContainerTemplate();
}

function renderPageContent() {
  clearIngredientsContainer();
  renderInputAndButtons()
  renderOptions()
  // renderSelectOptions();
  renderAccessoriesContainer();
  renderPreparationContainer();
  preparationForRenderStandard();
}

function clearIngredientsContainer() {
  document.getElementById("ingredientsContainer").innerHTML = '';
}

function renderInputAndButtons() {
  document.getElementById("selectOptions").innerHTML = renderInputAndButtonsTemplate();
}

function renderOptions(){
  let options = ""
  for (let i =1; i < 22; i++) {
    options += `<option value="${i}">${i}</option>`;
  }
    document.getElementById("selectOptions").innerHTML += renderOptionsTemplate(options);
  }

function renderAccessoriesContainer() {
  document.getElementById("accessoriesContainer").innerHTML = renderAccessoriesContainerTemplate();
}

function renderPreparationContainer() {
  document.getElementById("preparationContainer").innerHTML = renderPreparationContainerTemplate();
}
function preparationForRenderStandard() {
  for (let i = 0; i < howManyNeed.length; i++) {
    const objectsForRenderStandard = {
      cssClass: (i % 2 !== 0) ? 'white' : 'grey',
      countRef: `count-${i}`,
      counter: howManyNeed[i],
      ingredientName: ingredients[i]
    };
    renderStandard(objectsForRenderStandard);
  }
};

function renderStandard(objectsForRenderStandard) {
  document.getElementById("ingredientsContainer").innerHTML += renderStandardTemplate(objectsForRenderStandard.cssClass, objectsForRenderStandard.countRef, objectsForRenderStandard.counter, objectsForRenderStandard.ingredientName);
}

function preparationForCalculatePortion() {
  let portion = parseFloat(document.getElementById("input").value);
  if (!checkInputValue(portion)) {
    return;
  }
  document.getElementById("ingredientsContainer").innerHTML = '';
  for (let i = 0; i < howManyNeed.length; i++) {
    const objectsForCalcutatePortion = {
      calculatedPortion: portion * howManyNeed[i],
      cssClass: (i % 2 !== 0) ? 'white' : 'grey',
      ingredientName: ingredients[i],
      countRef: `count-${i}`
    }
    renderCalculatetPortion(objectsForCalcutatePortion)
  }
}

function renderCalculatetPortion(objectsForCalcutatePortion) {
  document.getElementById("ingredientsContainer").innerHTML += calculatedPortionTemplate(objectsForCalcutatePortion.cssClass, objectsForCalcutatePortion.countRef, objectsForCalcutatePortion.calculatedPortion, objectsForCalcutatePortion.ingredientName);
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
function preparationForCalculatePortionTwo() {
  let portionTwo = parseFloat(document.getElementById('portionSelect').value);
  document.getElementById("ingredientsContainer").innerHTML = '';
  for (let i = 0; i < howManyNeed.length; i++) {
    const objectsForCalcutatePortionTwo = {
      calculatedPortionTwo: portionTwo * howManyNeed[i],
      cssClass: (i % 2 !== 0) ? 'white' : 'grey',
      ingredientName: ingredients[i],
      countRef: `count-${i}`
    }
    renderCalculatetPortionTwo(objectsForCalcutatePortionTwo);
  }
}
function renderCalculatetPortionTwo(objectsForCalcutatePortionTwo) {
  document.getElementById("ingredientsContainer").innerHTML += calculatetPortionTwoTemplate(objectsForCalcutatePortionTwo.cssClass, objectsForCalcutatePortionTwo.countRef, objectsForCalcutatePortionTwo.calculatedPortionTwo, objectsForCalcutatePortionTwo.ingredientName);
}