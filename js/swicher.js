const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;
let isOn = false;
const colorSwich = () => {
    if (isOn) {
        return;
    }    
    isOn = true;
    timerId = setInterval(() => { 
       
            bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
        
    }, 1000);
}

const stopSwiching = () => {
    clearInterval(timerId);
    isOn = false;
}



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', colorSwich);
stopBtn.addEventListener('click', stopSwiching);




