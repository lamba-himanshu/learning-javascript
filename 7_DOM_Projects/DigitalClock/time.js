const clock=document.getElementById('Clock');


//to run something continously in a particular interval , we use setInterval method
setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);    