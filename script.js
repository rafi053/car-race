const input = document.querySelector("#input");
const race = document.querySelector(".race");
const car = document.querySelector(".car");
const track = document.querySelector(".track");
const cars = ["./images/car1.png", "./images/car2.png", 
"./images/car3.png", "./images/car4.png", "./images/car5.png"]


// הגבלת המספר בין 2 ל 4
function limitTrack(){
    if(input.value > 4){
        input.value = 4;
    }
    if(input.value < 2){
        input.value = 2;
    }
   
}

// יצירת מספר דיפולטיבי
function diffoltTrack(){
    if(input.value == ""){
        input.value = 3;
    }
}

//  יצירת מירוץ
function startRace(){
    if (checkCar() == 0){
        createTrack();
       
        moveCars();
    }
}

// יצירת מסלול
function createTrack(){
    for (let i = 0; i < input.value; i++) {
        let track = document.createElement("div");
        track.className = "track";
        let car = document.createElement("img");
        car.className = "car";
        car.src = cars[i];
        car.alt = "car";
        track.appendChild(car);
        let span = document.createElement("span");
        span.className = "span";
        track.appendChild(span); 
        race.appendChild(track);
        
        
    }
}
    

// בדיקה כמה רכבים נוצרו
function checkCar(){
   return race.children.length;
}
   

// יצירת אנימציה
function moveAnimation(animation){
    let missene = null;
    let pos = 0;
    clearInterval(missene);
    missene = setInterval(frame, Math.random() * 10);    
    function frame() {
      if (pos == 900) {
        clearInterval(missene);
      } else {
        pos++; 
        animation.style.right = pos + "px"; 
        animation.style.left = pos + "px"; 
      }
    }
}

// הזזת רכבים
function moveCars(){
    const carList = document.querySelectorAll(".car");
    carList.forEach((car) => {
        moveAnimation(car);
    })

}
