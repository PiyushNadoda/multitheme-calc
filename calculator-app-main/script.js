//   theme switcher

var container = document.querySelector(".toggle-button-container");
var button = document.querySelector(".toggle-button");
button.style.left = "4px";
container.addEventListener("click", () => {
  if (button.style.left === "4px") {
    button.style.left = "calc(50% - 10px)";
    themeSwitcher(2);
  } else if (button.style.left === "calc(50% - 10px)") {
    button.style.left = "calc(100% - 22px)";
    themeSwitcher(3);
  } else if (button.style.left === "calc(100% - 22px)") {
    button.style.left = "4px";
    themeSwitcher(1);
  }
});

function themeSwitcher(tNum){
  if(tNum === 1){
    let theme = document.querySelectorAll('.theme3')
    let themes = [...theme]
    for(let i =0; i < themes.length; i++){
      themes[i].classList.remove('theme3');
      themes[i].classList.add('theme1');
    }
  }
  else if(tNum === 2){
    let theme = document.querySelectorAll('.theme1')
    let themes = [...theme]
    for(let i =0; i < themes.length; i++){
      themes[i].classList.remove('theme1');
      themes[i].classList.add('theme2');
    }
  }
  else if(tNum === 3){
    let theme = document.querySelectorAll('.theme2')
    let themes = [...theme]
    for(let i =0; i < themes.length; i++){
      themes[i].classList.remove('theme2');
      themes[i].classList.add('theme3');
    }
  }
}






//  calc code
var inputVal = document.querySelector('.input-area')

inputVal.after.value = 5;

function buttonClick(e){
  if(inputVal.value == 0){
    inputVal.value = e.target.innerHTML;
    console.log(e.target);
  } else{
    inputVal.value += e.target.innerHTML;
  }
}

function buttonClickMult(e){
  if(inputVal.value == 0){
    inputVal.value = e.target.value;
    console.log(e.target);
  } else{
    inputVal.value += e.target.value;
  }
}



function resetVal(){
  inputVal.value = 0;
}

function deleteVal(){
  if(inputVal.value.length !== 1){
  inputVal.value = inputVal.value.slice(0, inputVal.value.length -1)}
  else{
    inputVal.value = 0;
  }
}

function getSum(){
  inputVal.value = eval(inputVal.value);
}
 
