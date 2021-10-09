let buttons = document.querySelectorAll(".drum");
for(let i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click",handleClick);
  // you want each instrument button to have it's own eventlistener
}
function handleClick(){
  let sound;
  let letter;
  if(event.type=="click"){
  console.log(event.type);
  letter =this.innerHTML;//check which letter the button was
}
else letter =event.key;
//if not a mouse click, then register which keyboard button was pressed
  switch(letter){
    case "w": sound = new Audio("sounds/tom-1.mp3");
    break;
    case "a": sound = new Audio("sounds/tom-2.mp3");
    break;
    case "s": sound = new Audio("sounds/tom-3.mp3");
    break;
    case "d": sound = new Audio("sounds/tom-4.mp3");
    break;
    case "j": sound = new Audio("sounds/snare.mp3");
    break;
    case "k": sound = new Audio("sounds/kick-bass.mp3");
    break;
    case "l": sound = new Audio("sounds/crash.mp3");
    break;
  }
  sound.play();
  buttonAnimation(letter);
}
  document.addEventListener("keydown",handleClick);
  //you want to keep track whenever a key is pressed to see if one of our instrument keys were pressed.
  function buttonAnimation(key){
    let buttn = document.querySelector("."+key);;
    buttn.classList.add("pressed"); //add pressed effect
    setTimeout(function(){//remove the pressed class after 100 ms
      buttn.classList.remove("pressed");
    },100);
  }
