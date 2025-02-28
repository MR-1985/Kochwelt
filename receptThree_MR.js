function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle('sideMenuHide')
  }
  
  howManyNeed = [0.5, 50, 1, 1, 1];
  
  howManyDiv = ["howMuchGreyOne", "howMuchWhiteOne", "howMuchGreyTwo", "howMuchWhiteTwo", "howMuchGreyThree"];
  
    function calculatePortion() {
      let portion = document.getElementById("input").value;
  
        for (let i = 0; i < howManyNeed.length; i++){
            let calculatedPortion = portion * howManyNeed[i];
            document.getElementById(howManyDiv[i]).innerText = calculatedPortion;
            }
            if (portion>21) {
              alert('Es sind nur max 21 Portionen zu errechnen!')
              portion = 1;
              document.getElementById('input').value = portion;
              for (let i = 0; i < howManyDiv.length; i++) {
                document.getElementById(howManyDiv[i]).innerText = howManyNeed[i]; 
              }
              return;
            }else if (portion<1) {
              alert('Es muss mindestens 1 Portion sein')
              portion = 1;
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
  