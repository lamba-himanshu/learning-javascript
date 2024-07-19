const randomValue = function(){
    const color = "0123456789ABCDEF";
    let value = "#";
    for(i = 0 ; i < 6 ; i++){
        value += color[ Math.floor(Math.random() * 16)];
    }
    return value;
}
let intervalId;
const changeColor = function(){
    if(!intervalId){
        intervalId =setInterval(function(){
            document.body.style.backgroundColor = randomValue();
        },1000);
    }
}

const stopChange= function(){
    clearInterval(intervalId);
    intervalId=null;
}

document.querySelector("#start").addEventListener('click',changeColor);
document.querySelector("#stop").addEventListener('click',stopChange);