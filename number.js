const randomNumber=13;

document.querySelector('.form').addEventListener('submit',function(e){
    e.preventDefault();
    let value=document.getElementById('amount').value;
    value=parseInt(value);
    console.log('input value type '+value);
    console.log('sum of two values ')
    console.log(randomNumber+value);

})