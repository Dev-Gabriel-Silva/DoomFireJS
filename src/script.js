const app = document.getElementById("app");

const fireHeight = 10;
const fireWidth = 10;
const numberOfPixels = fireHeight * fireWidth;
const firePixelIntensity = []; 


function start(){
    generateDataStructure();    
}

function generateDataStructure() {
    for(let i = 0; i <= numberOfPixels;){
        firePixelIntensity[i] = 0;
    }
}

app.onload = start;