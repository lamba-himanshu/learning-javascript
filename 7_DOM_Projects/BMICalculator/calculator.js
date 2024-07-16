
const button=document.querySelector('#calculate');

button.addEventListener('click',function(e){

    const height=parseInt(document.querySelector('#heightTextBox').value);
    const weight=parseInt(document.querySelector('#weightTextBox').value);
    const result=document.querySelector('#result');
    const report=document.querySelector('#report');
    e.preventDefault();
    if (height === '' || height<0 || isNaN(height) ) {
        result.innerHTML=`please enter a valid height`;

    } else if(weight==='' || weight<0 |isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight.';
    }else{
        const bmi =( weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `<span>${bmi} </span>`;
        if(bmi<18.6){
            report.innerHTML = `You are Underweight`;
        }else if(bmi>=18.6 && bmi<=24.9){
            report.innerHTML = `Your weight is in Normal Range`;
        }else{
            report.innerHTML = `You are Overweight`;
        }

    }
});