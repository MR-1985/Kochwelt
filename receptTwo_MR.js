function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle('sideMenuHide')
  }
  
  howManyNeed = [125, 200, 0.5, 0.5, 1, 15];
  
  howManyDiv = ["howMuchGreyOne", "howMuchWhiteOne", "howMuchGreyTwo", "howMuchWhiteTwo", "howMuchGreyThree", "howMuchGreyFive"];
  
    function calculatePortion() {
      let portion = document.getElementById("input").value;
  
        for (let i = 0; i < howManyNeed.length; i++){
            let calculatedPortion = portion * howManyNeed[i];
            document.getElementById(howManyDiv[i]).innerText = calculatedPortion;
            }
            if (portion>21) {
              alert('Es sind nur max 21 Portionen zu errechnen!')
              portion = "1";
            }else if (portion<1) {
              alert('Es muss mindestens 1 Portion sein')
              portion = "1";
              document.getElementById('input').value = portion;
                for (let i = 0; i < howManyDiv.length; i++) {
                  document.getElementById(howManyDiv[i]).innerText = howManyNeed[i]; 
                }
            return;
        }
    }
  
      function calculatePortionTwo(){
        let portionTwo = document.getElementById('portionSelect').value;
        for (let i = 0; i < howManyNeed.length; i++){
           let calculatedPortionTwo = portionTwo * howManyNeed[i];
           document.getElementById(howManyDiv[i]).innerText = calculatedPortionTwo;
        }
      }
  