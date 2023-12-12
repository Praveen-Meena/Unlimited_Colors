// Generate randomColor

const randomColor = function(){
    let hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]; 
    } 
    return color;
};

let intervalId ;
const changeBackgroundColor = function(){
    if(intervalId==null){
        intervalId = setInterval(BgColorChange, 1000);
    }
    function BgColorChange(){
        document.body.style.backgroundColor = randomColor(); 
    }
};

const stopChangeBackgroundColor = function(){
    clearInterval(intervalId); 
    intervalId = null; 
};

document.querySelector('#start').addEventListener('click', changeBackgroundColor); 
document.querySelector('#stop').addEventListener('click', stopChangeBackgroundColor); 