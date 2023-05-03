//variaveis
const inputUser = document.querySelector("input[type='text']");
const inputPass = document.querySelector("#idPass")
const eyePass = document.querySelector("#eye")

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

eyePass.addEventListener("click", ()=>{
    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye")
    }else{
        inputPass.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye-slash")
    }
})