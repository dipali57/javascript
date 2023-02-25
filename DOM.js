document.body.style.backgroundColor = "black";
document.body.style.color = "pink";
const h1 = document.getElementById('title');
h1.style.color = 'red';
function myFunction(){
    document.getElementById("btn").style.color = "red";
    document.getElementById("btn").style.backgroundColor = "green";
}

// window.alert('hello');

const headings = document.getElementsByTagName('h2');
headings[0].style.color = "red";

const items = document.getElementsByName('li');

const listItems = document.getElementsByClassName('special');
console.log(listItems);
console.log(headings.length);
