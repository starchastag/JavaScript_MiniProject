const colors = ["green","red","rgba(133,122,200)","rgba(80 120 160 / 50%)","rgb(80, 120, 160)","#f15025","#ff7f50","#ba55d3",'#cd5c5c','#ffa500','#40e0d0',"hsla(109, 50%, 50%, .75)", "rgba(80, 120, 160, .5)"];



const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click",function(){

    const randomNumber = getRandomNumber();
    console.log(randomNumber);


    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber (){
    return Math.floor(Math.random() * colors.length);
}