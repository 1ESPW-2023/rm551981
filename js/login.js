//variaveis
const inputUser = document.querySelector("input[type='text']");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style","outline-color:#ff0000;")
});

inputUser.addEventListener("keyup", ()=>{
    if(inputUser.value.length < 5){
        inputUser.setAttribute("style", "outline-color;#ff0000;")
    }else{
        inputUser.setAttribute("style", "outline-color:#00ff00;")
    }
});