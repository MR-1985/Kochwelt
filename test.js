function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle('sideMenuHide')
}

howManyNeed = [150, 0.5, 0.5, 10, 1, 1, 1, 1, 0.5];

howManyDiv = ["howMuchGreyOne", "howMuchWhiteOne", "howMuchGreyTwo", "howMuchWhiteTwo", "howMuchGreyThree", "howMuchWhiteThree", "howMuchGreyFour", "howMuchWhiteFour", "howMuchGreyFive"];

function calculatePortion() {
 let portion=document.getElementById("input").value;
 for (i = 0; i < howManyNeed.length; i++) {
  let calculatedPortion = portion * howManyNeed[i];
  document.getElementById(howManyDiv[i]).innerText = calculatedPortion;
 }
  if (portion>21) {
   alert('Es sind nur max 21 Portionen zu errechnen!')
   portion = "1";
   document.getElementById('input').value = portion;
    for (i = 0; i < howManyDiv.length; i++) {
     document.getElementById(howManyDiv[i]).innerText = howManyNeed[i]; 
    }
 return;
  }
}

function calculatePortionTwo() {
 let portionTwo = document.getElementById('portionSelect').value;
 for (i = 0; i < howManyNeed.length; i++) {
  let calculatedPortionTwo = portionTwo * howManyNeed[i];
  document.getElementById(howManyDiv[i]).innerText = calculatedPortionTwo;
 }
}




//----------ERSTER Versuch-----------------------------------------------

// console.log(document.getElementById('input').value);

// allFunctions()
//     function allFunctions(){
//     resultDesktop1();
//     resultDesktop2();
//     resultDesktop3();
//     resultDesktop4();
//     resultDesktop5();
//     resultDesktop6();
//     resultDesktop7();
//     resultDesktop8();
//     resultDesktop9();
// }



// function resultDesktop1(i) {
//     i = document.getElementById('howMuchGreyOne').innerText;
//     console.log(i);
//     o = document.getElementById('input').value;
//     let a = o * i;
//     document.getElementById('howMuchGreyOne').innerText = a;
//     return
// }

// function resultDesktop2(i) {
//     i = document.getElementById('howMuchWhiteOne').innerText;
//     console.log(i);
//     o = document.getElementById('input').value;
//     let a = o * i;
//     document.getElementById('howMuchWhiteOne').innerText = a;
//     return
// }
// function resultDesktop3(i) {
//     i = document.getElementById('howMuchGreyTwo').innerText;
//     console.log(i);
//     o = document.getElementById('input').value;
//     let a = o * i;
//     document.getElementById('howMuchGreyTwo').innerText = a;
//     return
// }

// function resultDesktop4(i) {
//     i = document.getElementById('howMuchWhiteTwo').innerText;
//     console.log(i);
//     o = document.getElementById('input').value;
//     let a = o * i;
//     document.getElementById('howMuchWhiteTwo').innerText = a;
//     return
// }

// function resultDesktop5(i) {
//     i = document.getElementById('howMuchGreyThree').innerText;
//     console.log(i);
//     o = document.getElementById('input').value;
//     let a = o * i;
//     document.getElementById('howMuchGreyThree').innerText = a;
//     return
// }
// function resultDesktop6(i) {
//     i = document.getElementById('howMuchWhiteThree').innerText;
//     console.log(i);
//     o = document.getElementById('input').value;
//     let a = o * i;
//     document.getElementById('howMuchWhiteThree').innerText = a;
//     return
// }
// function resultDesktop7(i) {
//     i = document.getElementById('howMuchGreyFour').innerText;
//     console.log(i);
//     o = document.getElementById('input').value;
//     let a = o * i;
//     document.getElementById('howMuchGreyFour').innerText = a;
//     return
// }
// function resultDesktop8(i) {
//     i = document.getElementById('howMuchWhiteFour').innerText;
//     console.log(i);
//     o = document.getElementById('input').value;
//     let a = o * i;
//     document.getElementById('howMuchWhiteFour').innerText = a;
//     return
// }
// function resultDesktop9(i) {
//     i = document.getElementById('howMuchGreyFive').innerText;
//     console.log(i);
//     o = document.getElementById('input').value;
//     let a = o * i;
//     document.getElementById('howMuchGreyFive').innerText = a;
//     return
// }

// disableInput('input')
//     function disableInput(){
        
//         document.getElementById('input').onkeydown = function(prevent){
//             prevent.preventDefault();
//         }
            
//         }

        
        
    
