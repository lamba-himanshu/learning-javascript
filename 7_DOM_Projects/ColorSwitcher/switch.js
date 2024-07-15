const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
const h1=document.querySelector('h1');
const h2=document.querySelector('h2');
button.forEach(function (b){
    b.addEventListener('click',function(e){
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            h1.style.color="#fff";
            h2.style.color="#fff";
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            h1.style.color="#fff";
            h2.style.color="#fff";
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
            h1.style.color="#fff";
            h2.style.color="#fff";
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            h1.style.color="#fff";
            h2.style.color="#fff";
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
            h1.style.color="#fff";
            h2.style.color="#fff";
        }
        
    });
});