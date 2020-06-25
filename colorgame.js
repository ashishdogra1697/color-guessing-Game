var numSquare = 6;
var colors = getRandomColor(numSquare);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var display = document.getElementById("colorDisplay");
var msg = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numSquare =3;
    colors= getRandomColor(numSquare);
    pickedColor=pickColor();
    display.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor =colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});
hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numSquare = 6;
    colors= getRandomColor(numSquare);
    pickedColor=pickColor();
    display.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor =colors[i];
            squares[i].style.display = "block";
    }
});

reset.addEventListener("click", function(){
    colors= getRandomColor(numSquare);
    pickedColor=pickColor();
    display.textContent=pickedColor;
    reset.textContent="New Colors";
    msg.textContent="";
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

display.textContent = pickedColor;

for(var i=0; i< squares.length; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
    //add event listner
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare clickedcolor to picked one
      if(clickedColor === pickedColor){
          msg.textContent = "Correct";
          reset.textContent ="Play Again?";
          changeColors(clickedColor); 
          h1.style.backgroundColor = clickedColor;
         }
      else{
          this.style.backgroundColor = "#232323";
          msg.textContent = "Try Again";
      }
    });
}

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function getRandomColor(num){
    var arr=[]
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }

    return arr;
}
function randomColor(){
   var red = Math.floor(Math.random()*256);
   var green = Math.floor(Math.random()*256);
   var blue = Math.floor(Math.random()*256);
   return "rgb("+ red + ", " + green + ", " + blue + ")";
}