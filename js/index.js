let total = 0;
let holdingTank = "0";
let previous = null;
const screen = document.querySelector(".screen");
document.querySelector('.calc-btns').addEventListener('click',function(event){

  buttonClick(event.target.innerText);
})
function buttonClick(value){
  if(isNaN(parseInt(value))){
    symbolBtn(value);
  }
  else{
    numberBtn(value);
  }
    display();
}
function numberBtn(value){
  if(holdingTank ==='0'){
    holdingTank = value;
  }
  else{
    holdingTank += value;
  }
  display();
}
function display(){
  screen.innerText=holdingTank;
}
function symbolBtn(value){
  switch(value){
    case "C":
      holdingTank = "0";
      total = 0;
      previous = null;
      break
    case '=':
      if(previous === null){
        return;
      }
      getOperator(parseInt(holdingTank));
      previous = null;
      holdingTank="" + total
      total=0;
      break;
    
    default:
      mathOperator(value);
      break;
  }
}
function mathOperator(value){
  const intholdingTank= parseInt(holdingTank);
  if(total === 0){
    total = intholdingTank;
  }
  else{
    getOperator(intholdingTank)
  }
  previous= value;


  holdingTank="0";

}
function getOperator(intholdingTank){
  if (previous === "+") {
    total += intholdingTank;
  } else if (previous === "-") {
    total -= intholdingTank;
  } else if (previous === "*") {
    total *= intholdingTank;
  }
  else{
    total /=intholdingTank;
  }
}