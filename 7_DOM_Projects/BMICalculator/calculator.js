
const button=document.querySelector('#calculate');

button.addEventListener('click',function(e){

    const height=parseInt(document.querySelector('#heightTextBox').value);
    const weight=parseInt(document.querySelector('#weightTextBox').value);
    const result=document.querySelector('#result');
    e.preventDefault();
    if (height === '' || height<0 || isNaN(height) ) {
        result.innerHTML=`please enter a valid height`;

    } else if(weight==='' || weight<0 |isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight.';
    }else{
        const bmi =( weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi} </span>`;
    }
});